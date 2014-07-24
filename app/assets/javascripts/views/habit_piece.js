HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  render: function() {
    var renderedContent = this.template({
      habit: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
});
