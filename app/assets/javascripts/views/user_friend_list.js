HabitrackApp.Views.UserFriendList = Backbone.View.extend({
  template: JST['sidebar/friends_list'],

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    return this;
  }
});
