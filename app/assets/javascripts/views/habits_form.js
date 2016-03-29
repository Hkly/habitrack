HabitrackApp.Views.HabitForm = Backbone.View.extend({
  template: JST['habits/form'],
  tagName: "form",
  className: "habit-form",

  initialize: function(opts) {
    this.habit = opts.habit;
    this.habits = opts.habits;
  },

  events: {
    "submit": "createOrSaveHabit",
    "click .cancel-link": "hideForm"
  },

  hideForm: function(event){
    this.$el.parent().addClass('hidden');
  },

  createOrSaveHabit: function(event) {
    event.preventDefault();

    var params = this.$el.serializeJSON();
    var habit = this.habit;
    if (habit.id) {
      habit.set(params);
      habit.save({}, {
        success: function(updated_habit) {
          // what do i want to do on save?
          // close form view, re-render new info on modal

        }
      });
    } else {
      habit.set(params);
      var that = this;
      habit.save({}, {
        success: function(new_habit) {
          that.habits.add(new_habit);
          that.habit = new HabitrackApp.Models.Habit();
          that.render();
        },
        error: function(errors) {
          //I don't know, do something
        }
      });
    }
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.habit
    });

    this.$el.html(renderedContent);

    return this;
  }
});
