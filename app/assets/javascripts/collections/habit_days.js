HabitrackApp.Collections.HabitDays = Backbone.Collection.extend({
  initialize: function(attributes, options) {
    this.habit = options.habit;
  },

  url: function () {
    return "api/habits/" + this.habit.id + "/habit_days";
  },

  model: HabitrackApp.Models.HabitDay
});
