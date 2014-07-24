HabitrackApp.Collections.Habits = Backbone.Collection.extend({
  url: 'api/habits',
  model: HabitrackApp.Models.Habit
});

HabitrackApp.Collections.habits = new HabitrackApp.Collections.Habits();
