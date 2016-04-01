HabitrackApp.Views.UserFriendList = Backbone.CompositeView.extend({
  template: JST['sidebar/friends_list'],

  initialize: function() {
    this.userModel = HabitrackApp.Collections.users.getOrFetch(window.currentUserId);
    this.userFriends = this.userModel.friends();
    this.listenTo(this.userModel, 'sync', this.addFriendList);
    this.listenTo(this.userFriends, 'sync', this.addFriendListPiece);
  },

  addFriendList: function() {
    var that = this;
    this.userFriends.each( function(friend) {
      that.addFriendListPiece(friend);
    });
  },

  addFriendListPiece: function(friend) {
    var friendListPiece = new HabitrackApp.Views.FriendListPiece({
      friend: friend
    });
    this.addSubview('#list-o-friends', friendListPiece);
  },

  events: {
    "click #friend-search-btn": "toggleSearchForm",
    "submit": "createFriendships",
    "click .list-username": "createFriendThroughClick"
  },

  updateInputValue: function(friendName) {
    var inputEl = document.querySelector('.friend-search-input');
    var triggerChange = new Event('input', { bubbles: true });

    inputEl.value = friendName;
    inputEl.dispatchEvent(triggerChange);
  },

  toggleSearchForm: function(event) {
    $('#friend-search').toggleClass('hidden');
    $('input.friend-search-input').focus();
    this.updateInputValue('');
  },

  createFriendThroughClick: function(event) {
    var friendName = event.target.textContent;

    this.updateInputValue(friendName);
    this.createFriendships(event);
  },

  createFriendships: function(event) {
    event.preventDefault();
    $('.filtered-user-list').addClass('hidden');
    var params = this.$('form').serializeJSON();
    var friendship = new HabitrackApp.Models.Friendship();

    friendship.set(params);
    var that = this;
    friendship.save({}, {
      success: function(newFriend) {
        that.userFriends.add(newFriend);
        $(event.currentTarget).parent().find('#friend-search-btn').removeClass('hidden');
        $(event.currentTarget).find('input.typeahead').val('');
      }
    });
  },

  getUserNames: function() {
    return HabitrackApp.Collections.users.map(function(user) {
      return user.get('username');
    });
  },

  setUpSearchBar: function() {
    HabitrackApp.renderSearchBar(this.getUserNames());
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);
    this.attachSubviews();

    setTimeout(this.setUpSearchBar.bind(this), 500);

    return this;
  }
});
