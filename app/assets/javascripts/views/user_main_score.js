HabitrackApp.Views.UserMainScore = Backbone.View.extend({
  template: JST['sidebar/main_score'],

  initialize: function() {
    this.listenTo(this.collection, 'sync remove change_habit_days', this.render);

  },


  render: function() {
    var renderedContent = this.template({
      habits: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});
