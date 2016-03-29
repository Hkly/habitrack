HabitrackApp.Views.HabitDays = Backbone.View.extend({
  template: JST['habits/days'],
  className: "days-list",

  initialize: function(opts) {
    this.currentHabitDays = opts.currentHabitDays;
    this.habit = opts.habit;
  },

  addDots: function() {
    var that = this;
    this.currentHabitDays.each(function(habitDay) {
      var doneDay = habitDay.get('day');
      that.$el.find(".btn-circle[data-day='" + doneDay + "']").addClass("completed");
    });
  },

  events: {
    "click .btn-circle": "toggleHabitDay"
  },

  toggleHabitDay: function(event) {
    if ($(event.target).hasClass("completed")) {
      this.deleteHabitDay(event);
    } else {
      this.createHabitDay(event);
    }
  },

  createHabitDay: function(event) {
    var that = this;
    var newHabitDay = new HabitrackApp.Models.HabitDay({}, {model: this.habit});
    var params = { day: $(event.currentTarget).data("day") };

    newHabitDay.save({habit: params}, {
      success: function(savedHabitDay) {
        that.currentHabitDays.add(savedHabitDay);
        $(event.currentTarget).addClass('completed');
      }
    });
  },

  deleteHabitDay: function(event) {
    var clickedDay = $(event.currentTarget).data('day');
    var clickedHabitDayModel = this.currentHabitDays.find(function(model) {
      return model.get('day') == clickedDay;
    });
    clickedHabitDayModel.destroy({
      success: function(deletedHabit) {
        $(event.currentTarget).removeClass('completed');
      }
    }, {model: this.habit});
  },

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);
    this.addDots();
    return this;
  }
});
