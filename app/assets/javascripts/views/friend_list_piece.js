HabitrackApp.Views.FriendListPiece = Backbone.View.extend({
  template: JST['sidebar/friend_list_piece'],
  className: "friend-list-piece",

  randomScore: function() {
    return Math.floor(Math.random() * 58) + 40;
  },

  render: function() {
    var renderedContent = this.template({
      friend: this.model,
      score: this.randomScore()
    });

    this.$el.html(renderedContent);

    return this;
  }
});
