HabitrackApp.Views.UserSide = Backbone.CompositeView.extend({
  template: JST["sidebar/user_side"],

  initialize: function() {
    this.randomData = HabitrackApp.helpers.makeRandomData();
    var mainScoreView = new HabitrackApp.Views.UserMainScore({
      collection: this.collection,
      randomData: this.randomData.slice(-4)
    });
    this.addSubview('.main-score', mainScoreView);

    var reportGraphsView = new HabitrackApp.Views.UserReportGraphs({
      collection: this.collection,
      randomData: this.randomData
    });
    this.addSubview('.report-graphs', reportGraphsView);

    var friendsListView = new HabitrackApp.Views.UserFriendList();
    this.addSubview('.friends-list-box', friendsListView);

  },

  render: function(){
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    this.attachSubviews();

    return this;
  }
});
