HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  initialize: function(options) {

    this.listenTo(this.model, 'sync', this.render);

    var editFormView = new HabitrackApp.Views.HabitForm({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('.edit-habit-form', editFormView);

    var habitDaysView = new HabitrackApp.Views.HabitDays({
      collection: this.model.habitDays(),
      model: this.model
    });
    this.addSubview('.days', habitDaysView);
    var habitStatsView = new HabitrackApp.Views.HabitStats({
      model: this.model,
      collection: this.collection,
      habitDays: this.model.habitDays()
      });
    this.addSubview('.stats', habitStatsView);
  },

  events: {
    "mouseenter": "showButtons",
    "mouseleave": "hideButtons",
    "click .delete-habit-btn": "deleteHabit",
    "click .edit-habit-btn": "toggleEditForm"
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

  toggleEditForm: function(event) {
    this.$el.find('.edit-habit-form').toggleClass('hidden').find('#habit_title').focus();
    this.$el.find('.stats').toggleClass('hidden');
    this.$el.find('.days').toggleClass('hidden');
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
