HabitrackApp.Views.UserMainScore = Backbone.View.extend({
  template: JST['sidebar/main_score'],

  weekScore: function() {
    var score = 0;

    return score;
  },

  monthScore: function() {
    var score = 0;

    return score;
  },

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    this.$el.find('.this-week').append("<span class='score'>" + this.weekScore() + "</span>");
    this.$el.find('.month-avg').append("<span class='score'>" + this.monthScore() + "</span>");

    return this;
  }
});
