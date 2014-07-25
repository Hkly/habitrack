HabitrackApp.Views.HabitDays = Backbone.View.extend({
  template: JST['habits/days'],

  render: function() {
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  }
});
