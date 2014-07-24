HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  events: {
    "mouseenter": "showDelete",
    "mouseleave": "hideDelete",
    "click button.delete-habit-btn": "deleteHabit"
  },

  showDelete: function(event) {
    $(event.target).find('.delete-habit-btn').removeClass('hidden');
  },

  hideDelete: function(event) {
    $(event.target).find('.delete-habit-btn').addClass('hidden');
  },

  deleteHabit: function(event) {
    var that = this;
    this.model.destroy({
      success: function() {
        // that.collection.remove(that.model);
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
