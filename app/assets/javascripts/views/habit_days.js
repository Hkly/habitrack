HabitrackApp.Views.HabitDays = Backbone.View.extend({
  template: JST['habits/days'],
  className: "days-list",

  initialize: function() {


  },

  addDots: function() {
    var that = this;

    this.model.habitDays().each(function(habitDay) {
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
    var newHabitDay = new HabitrackApp.Models.HabitDay({}, {model: this.model});
    var params = { day: $(event.currentTarget).data("day") };

    newHabitDay.save({habit: params}, {
      success: function(savedHabitDay) {
        that.collection.add(savedHabitDay);
        $(event.currentTarget).addClass('completed');
      }
    });
  },

  deleteHabitDay: function(event) {
    var clickedDay = $(event.currentTarget).data('day');
    var clickedHabitDayModel = this.model.habitDays().find(function(model) {
      return model.get('day') == clickedDay;
    });
    // debugger
    clickedHabitDayModel.destroy({
      success: function(deletedHabit) {
        $(event.currentTarget).removeClass('completed');
      }
    }, {model: this.model});
  },

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);
    this.addDots();
    return this;
  }
});
