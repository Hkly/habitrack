HabitrackApp.Views.HabitForm = Backbone.View.extend({
  template: JST['habits/form'],
  tagName: "form",

  events: {
    "submit": "createOrSaveHabit"
  },

  createOrSaveHabit: function(event) {
    event.preventDefault();

    var params = this.$el.serializeJSON();
    var habit = this.model;
    if (habit.id) {
      habit.set(params);
      habit.save({}, {
        success: function() {
          // what do i want to do on save?
          // close form view, re-render new info on modal
        }
      });
    } else {
      habit.set(params);
      var that = this;
      habit.save({}, {
        success: function(new_habit) {
          that.collection.add(new_habit);
          that.model = new HabitrackApp.Models.Habit();
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
      habit: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
