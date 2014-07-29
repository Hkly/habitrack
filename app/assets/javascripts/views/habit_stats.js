HabitrackApp.Views.HabitStats = Backbone.View.extend({
  template: JST['habits/stats'],
  className: 'habit-stats',

  initialize: function(options) {
    this.habitDays = options.habitDays;
    this.listenTo(this.collection, 'sync remove', this.render);
    this.listenTo(this.habitDays, 'add remove', this.render);
  },

  render: function() {

    var renderedContent = this.template({
      habitDays: this.habitDays,
      habit: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
