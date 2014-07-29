HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  initialize: function(options) {
    // this.pointsPerUnit = options.pointsPerUnit;

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
      habitDays: this.model.habitDays(),
      
      pointsPerUnit: options.pointsPerUnit
    });
    this.addSubview('.stats', habitStatsView);
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

  toggleEditForm: function(event) {
    this.$el.find('.edit-habit-form').toggleClass('hidden').find('#habit_title').focus();
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
