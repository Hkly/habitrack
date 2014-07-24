HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  events: {
    "mouseenter": "toggleDelete",
    "mouseleave": "toggleDelete",
    "click button.delete-habit-btn": "deleteHabit"
  },

  toggleDelete: function(event) {
    $(event.target).find('.delete-habit-btn').toggleClass('hidden');
  },

  deleteHabit: function(event) {
    var that = this;
    this.model.destroy({
      success: function() {
        that.collection.remove(this.model);
      }
    });
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
});
