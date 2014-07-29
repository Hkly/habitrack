HabitrackApp.Models.Habit = Backbone.Model.extend({
  initialize: function() {
    this.habitDays.url = function() {
      return 'api/habits/' + this.id + '/habit_days';
    };
  },

  urlRoot: "api/habits",

  habitDays: function() {
    if (!this._habitDays) {
      this._habitDays = new HabitrackApp.Collections.HabitDays([], { habit: this});
    }
    return this._habitDays;
  },

  parse: function(jsonResponse) {
    if (jsonResponse.habit_days) {
      this.habitDays().set(jsonResponse.habit_days, {parse: true});
      // delete habbitDays property from jsonResponse.
    }
    return jsonResponse;
  },

  weightedPoints: function() {
    return (100 / this.collection.totalUnits()) * this.get('weight');
  },

  pointsPerDay: function(){
    return this.weightedPoints() / this.get('num_days_per_week');
  },

  currentPoints: function(){
    return this.habitDays().length * this.pointsPerDay();
  }
});
