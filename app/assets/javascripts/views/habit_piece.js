HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-stuff",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);

    var editFormView = new HabitrackApp.Views.HabitForm({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('.edit-habit-form', editFormView);
  },

  events: {
    "mouseenter": "showButtons",
    "mouseleave": "hideButtons",
    "click button.delete-habit-btn": "deleteHabit",
    "click button.edit-habit-btn": "toggleEditForm"
  },

  showButtons: function(event) {
    $(event.target).find('.habit-btns').removeClass('hidden');
  },

  hideButtons: function(event) {
    $(event.target).find('.habit-btns').addClass('hidden');
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

  showEditForm: function(event) {
    this.$el.find('.edit-habit-form').removeClass('hidden');
  },

  hideEditForm: function(event) {
    this.$el.find('.edit-habit-form').addClass('hidden');
  },

  toggleEditForm: function(event) {
    this.$el.find('.edit-habit-form').toggleClass('hidden');
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
