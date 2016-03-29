HabitrackApp.Models.Habit = Backbone.Model.extend({
  initialize: function() {
    this.listenTo(this.currentHabitDays(), "add remove", this.trigger.bind(this, 'change_habit_days'));
  },

  urlRoot: "api/habits",

  habitDays: function() {
    if (!this._habitDays) {
      this._habitDays = new HabitrackApp.Collections.HabitDays([], { habit: this});
    }
    return this._habitDays;
  },

  currentHabitDays: function() {
    if (!this._currentHabitDays) {
      this._currentHabitDays = new HabitrackApp.Collections.HabitDays([], {habit: this });
    }
    return this._currentHabitDays;
  },

  parse: function(jsonResponse) {
    if (jsonResponse.all_habit_days) {
      this.habitDays().set(jsonResponse.all_habit_days, {parse: true});
      delete jsonResponse.all_habit_days;
    }
    if (jsonResponse.current_habit_days) {
      this.currentHabitDays().set(jsonResponse.current_habit_days, {parse: true});
      delete jsonResponse.current_habit_days;
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
    return this.currentHabitDays().length * this.pointsPerDay();
  }
});
