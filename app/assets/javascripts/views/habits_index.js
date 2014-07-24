HabitrackApp.Views.HabitsIndex = Backbone.CompositeView.extend({
  template: JST['habits/index'],

  render: function () {
    var renderedContent = this.template(); // do i need locals?
    this.$el.html(renderedContent);
    return this;
  }
});
