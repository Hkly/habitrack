HabitrackApp.Views.UserMainScore = Backbone.View.extend({
  template: JST['sidebar/main_score'],

  initialize: function(options) {
    this.lastFourRandomData = options.randomData;
    this.currentScore = 0;
    this.listenTo(this.collection, 'sync remove change_habit_days', this.render);
    this.listenToOnce(this.collection, 'sync', this.animateScore);
    this.listenTo(this.collection, 'sync remove change_habit_days', this.updateScore);

  },

  calculateAverage: function() {
    var num = this.collection.totalPoints();
    this.lastFourRandomData.forEach(function(n) {
      num += n;
    });
    return Math.floor(num / 4);
  },

  animateScore: function() {
    var options = {
      useEasing : true,
      useGrouping : false
    };
    var score = new countUp("current-score", this.currentScore, Math.floor(this.collection.totalPoints()), 0, 1.5, options);
    this.currentScore = Math.floor(this.collection.totalPoints());
    score.start();
  },

  updateScore: function() {
    this.animateScore();
    // $('#current-score').text(Math.floor(this.collection.totalPoints()));
  },

  render: function() {
    var renderedContent = this.template({
      habits: this.collection,
      average: this.calculateAverage()
    });

    this.$el.html(renderedContent);

    return this;
  }
});
