HabitrackApp.Views.UserFriendList = Backbone.CompositeView.extend({
  template: JST['sidebar/friends_list'],

  initialize: function() {
    this.userModel = HabitrackApp.Collections.users.getOrFetch(window.currentUserId);
    this.userFriends = this.userModel.friends();
    this.listenTo(this.userModel, 'sync', this.addFriendList);
  },

  events: {
    "click #friend-search-btn": "toggleSearchForm",
    "submit": "createFriendship",
    "click .list-username": "createFriendThroughClick"
  },

  toggleSearchForm: function(event) {
    $('#friend-search').toggleClass('hidden');
    $('input.friend-search-input').focus();
    this.updateInputValue('');
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

  updateInputValue: function(friendName) {
    var inputEl = document.querySelector('.friend-search-input');
    var triggerChange = new Event('input', { bubbles: true });

    inputEl.value = friendName;
    inputEl.dispatchEvent(triggerChange);
  },

  createFriendThroughClick: function(event) {
    var friendName = event.target.textContent;

    this.updateInputValue(friendName);
    this.createFriendship(event);
  },

  createFriendship: function(event) {
    event.preventDefault();
    $('.filtered-user-list').addClass('hidden');
    var params = this.$('form').serializeJSON();
    var friendship = new HabitrackApp.Models.Friendship();

    friendship.set(params);
    var that = this;
    friendship.save({}, {
      success: function(newFriend) {
        that.userFriends.add(newFriend);
        that.addFriendListPiece(newFriend);
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
