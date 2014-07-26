HabitrackApp.Collections.HabitDays = Backbone.Collection.extend({
  initialize: function(options) {
    this.model = options.habit;
  },

  url: function () {
    return "api/habits/" + this.model.id + "/habit_days";
  }
});
