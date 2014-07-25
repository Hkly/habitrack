HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  initialize: function() {

  },

  events: {
    "mouseenter": "showDelete",
    "mouseleave": "hideDelete",
    "click button.delete-habit-btn": "deleteHabit",
    "mousedown": "openModal",
    "click button.edit-habit-btn": "showEditForm"
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
        // wait what? why don't I need this?
        // that.collection.remove(that.model);
      }
    });
  },

  openModal: function(event) {
    var modalId = "#modal" + this.model.id;
    $(event.target).find(modalId).modal('toggle');
  },

  showEditForm: function(event) {
    console.log("clicked me!");
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
});
