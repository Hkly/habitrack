HabitrackApp.Models.HabitDay = Backbone.Model.extend({
  initialize: function(attributes, options) {
    this.habit_day = options.model;

  },

  urlRoot: function () {
    // TODO: see if you need this.habit_day even
    
    if (!this.habit_day) {
      return "api/habits/" + this.get('habit_id') + "/habit_days";
    } else {
      return "api/habits/" + this.habit_day.id + "/habit_days";
    }
  }
});
