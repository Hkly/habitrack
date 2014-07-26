HabitrackApp.Views.HabitDays = Backbone.View.extend({
  template: JST['habits/days'],
  className: "days-list",

  initialize: function() {


  },

  addDots: function() {
    var that = this;

    // debugger
    this.model.habitDays().each(function(habitDay) {
      var doneDay = habitDay.get('day');
      that.$el.find(".btn-circle[data-day='" + doneDay + "']").addClass("completed");
    });
  },

  events: {
    "click .btn-circle": "toggleHabitDay"
  },

  toggleHabitDay: function(event) {

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

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);
    this.addDots();
    return this;
  }
});
