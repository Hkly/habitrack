HabitrackApp.Views.UserSide = Backbone.CompositeView.extend({
  template: JST["sidebar/user_side"],

  initialize: function() {
    this.randomData = this.makeRandomData();
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

  makeRandomData: function() {
    var data = [];
    for (var i = 0; i < 12; i++) {
      data.push(Math.floor(Math.random() * 58) + 40);
    }
    data.push(0);
    return data;
  },

  render: function(){
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    this.attachSubviews();

    return this;
  }
});
