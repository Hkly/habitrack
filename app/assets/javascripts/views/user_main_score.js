HabitrackApp.Views.UserMainScore = Backbone.View.extend({
  template: JST['sidebar/main_score'],

  initialize: function(options) {
    this.lastFourRandomData = options.randomData;
    this.currentScore = 0;

    this.listenTo(this.collection, 'sync remove change_habit_days', this.updateScores);
  },

  calculateAverage: function() {
    var num = this.collection.totalPoints();
    this.lastFourRandomData.forEach(function(n) {
      num += n;
    });
    return Math.floor(num / 4);
  },

  animateScore: function(selector, newScore, prevScore) {
    var options = {
      useEasing : true,
      useGrouping : false
    };
    var score = new countUp(selector, prevScore, newScore, 0, 1.5, options);
    score.start();
  },

  updateCurrentScore: function() {
    // Displayed score should only go up to 100
    var prevScore = this.currentScore > 100 ? 100 : this.currentScore;

    this.currentScore = Math.floor(this.collection.totalPoints());
    var newScore = this.currentScore > 100 ? 100 : this.currentScore;

    this.animateScore('current-score', newScore, prevScore);
  },

  updateAverageScore: function() {
    var newAverage = this.calculateAverage();
    newAverage = newAverage > 100 ? 100 : newAverage;
    var prevAverage = parseInt($('#average-score').text());

    this.animateScore('average-score', newAverage, prevAverage);
  },

  updateScores: function() {
    this.updateCurrentScore();
    this.updateAverageScore();
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
