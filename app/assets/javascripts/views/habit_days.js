HabitrackApp.Views.HabitDays = Backbone.View.extend({
  template: JST['habits/days'],
  className: "days-list",

  events: {
    "click .btn-circle": "createHabitDay"
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

    return this;
  }
});
