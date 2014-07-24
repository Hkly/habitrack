HabitrackApp.Views.HabitForm = Backbone.View.extend({
  template: JST['habits/form'],
  tagName: "form",

  events: {
    "submit": "createOrSaveHabit"
  },

  createOrSaveHabit: function() {
    console.log("we are almost there!");
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});
