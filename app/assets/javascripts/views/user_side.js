HabitrackApp.Views.UserSide = Backbone.CompositeView.extend({
  template: JST["sidebar/user_side"],

  initialize: function() {
    var mainScoreView = new HabitrackApp.Views.UserMainScore();
    this.addSubview('.main-score', mainScoreView);

    var reportGraphsView = new HabitrackApp.Views.UserReportGraphs();
    this.addSubview('.report-graphs', reportGraphsView);

    var friendsListView = new HabitrackApp.Views.UserFriendList();
    this.addSubview('.friends-list', friendsListView);

  },

  render: function(){
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    this.attachSubviews();

    return this;
  }
});
