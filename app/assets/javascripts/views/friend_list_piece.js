HabitrackApp.Views.FriendListPiece = Backbone.View.extend({
  template: JST['sidebar/friend_list_piece'],
  className: "friend-list-piece",

  initialize: function(opts) {
    this.friend = opts.friend;
  },

  render: function() {
    var renderedContent = this.template({
      friend: this.friend,
      score: HabitrackApp.helpers.makeRandomScore()
    });

    this.$el.html(renderedContent);

    return this;
  }
});
