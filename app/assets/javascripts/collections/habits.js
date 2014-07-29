HabitrackApp.Collections.Habits = Backbone.Collection.extend({
  url: 'api/habits',
  model: HabitrackApp.Models.Habit,

  totalUnits: function(){
    var total = 0;
    this.each(function(habit) {
      total += habit.get('weight');
    });
    return total;
  }

});

HabitrackApp.Collections.habits = new HabitrackApp.Collections.Habits();
