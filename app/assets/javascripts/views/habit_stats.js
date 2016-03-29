HabitrackApp.Views.HabitStats = Backbone.View.extend({
  template: JST['habits/stats'],
  className: 'habit-stats',

  initialize: function(opts) {
    this.habit = opts.habit;
    this.habits = opts.habits;
    this.habitDays = opts.habitDays;
    this.listenTo(this.habits, 'sync remove', this.render);
    this.listenTo(this.habitDays, 'add remove', this.render);
  },

  render: function() {

    var renderedContent = this.template({
      habitDays: this.habitDays,
      habit: this.habit
    });

    this.$el.html(renderedContent);

    return this;
  }
});
