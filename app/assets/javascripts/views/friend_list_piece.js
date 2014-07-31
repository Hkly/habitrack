HabitrackApp.Views.FriendListPiece = Backbone.View.extend({
  template: JST['sidebar/friend_list_piece'],
  className: "friend-list-piece",

  render: function() {
    var renderedContent = this.template({
      friend: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
