HabitrackApp.Views.HabitStats = Backbone.View.extend({
  template: JST['habits/stats'],
  className: 'habit-stats',

  initialize: function(options) {
    this.habitDays = options.habitDays;
    this.habits = options.habits;
    this.pointsPerUnit = options.pointsPerUnit;
    this.listenTo(this.habitDays, 'add remove', this.render);
    this.listenTo(this.habits, 'sync', this.calculateWeightedPoints);
  },

  calculateWeightedPoints: function() {
    debugger
    var weightedPoints = this.pointsPerUnit * this.model.get('weight');

    if (weightedPoints !== this.model.get('weighted_points')) {

      this.model.save({'weighted_points': weightedPoints}, {
        success: function() {

        }
      });
    }
  },

  render: function() {

    var renderedContent = this.template({
      numDays: this.collection.length,
      habit: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
