HabitrackApp.Models.Habit = Backbone.Model.extend({
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
  }
});
