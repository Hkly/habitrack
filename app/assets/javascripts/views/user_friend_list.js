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
      model: friend
    });
    this.addSubview('#list-o-friends', friendListPiece);
  },

  events: {
    "click #friend-search-btn": "showSearchForm",
    "submit": "createFriendships"
  },

  showSearchForm: function(event) {
    $(event.currentTarget).parent().find('#friend-search-form').toggleClass('hidden');
    $(event.currentTarget).parent().find('input.typeahead').focus();
  },

  createFriendships: function(event) {
    event.preventDefault();
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

  getUsers: function(q, cb){
    var names = [];
    HabitrackApp.Collections.users.each(function(user) {
      names.push(user.get('username'));
    });

    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(names, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  },

  setTypeahead: function() {
    this.$('#friend-search .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },{
      name: 'username',
      displayKey: 'value',
      source: this.getUsers
    });
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    setTimeout(this.setTypeahead.bind(this), 500);
    this.attachSubviews();

    return this;
  }
});
