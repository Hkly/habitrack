HabitrackApp.Views.UserFriendList = Backbone.CompositeView.extend({
  template: JST['sidebar/friends_list'],

  initialize: function() {
    this.friends = this.getFriends();
    this.listenTo(this.friends, 'add', this.addFriendListPiece);

    var that = this;
    this.friends.each(function(friend) {
      that.addFriendListPiece(friend);
    });
  },

  events: {
    "click button#friend-search-btn": "showSearchForm",
    "submit": "createFriendships"
  },

  showSearchForm: function(event) {
    $(event.currentTarget).parent().find('#friend-search-form').removeClass('hidden');
    $(event.currentTarget).addClass('hidden');
  },

  createFriendships: function(event) {
    event.preventDefault();
    var params = this.$('form').serializeJSON();
    var friendship = new HabitrackApp.Models.Friendship();

    friendship.set(params);
    friendship.save({}, {
      success: function() {

      },
      error: function() {

      }
    });

    $(event.currentTarget).parent().find('#friend-search-btn').removeClass('hidden');
    $(event.currentTarget).find("#friend-search-form").addClass('hidden');
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

  getFriends: function() {
    var current_user = HabitrackApp.Collections.users.getOrFetch(window.currentUserId);
    return current_user.friends();
  },

  addFriendListPiece: function(friend) {
    var friendListPiece = new HabitrackApp.Views.FriendListPiece({
      model: friend
    });
    this.addSubview('#list-o-friends', friendListPiece);
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    setTimeout(this.setTypeahead.bind(this), 500);
    this.attachSubviews();

    return this;
  }
});
