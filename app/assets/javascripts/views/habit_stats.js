HabitrackApp.Views.HabitStats = Backbone.View.extend({
  template: JST['habits/stats'],
  className: 'habit-stats',

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function() {

    var renderedContent = this.template({
      numDays: this.collection.length,
      targetDays: this.model.get('num_days_per_week')
    });

    this.$el.html(renderedContent);

    return this;
  }
});
