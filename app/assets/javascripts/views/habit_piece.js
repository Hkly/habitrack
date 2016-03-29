HabitrackApp.Views.HabitPiece = Backbone.CompositeView.extend({
  template: JST['habits/piece'],
  className: "habit-piece",

  initialize: function(opts) {
    this.habit = opts.habit;
    this.habits = opts.habits;

    this.listenTo(this.habit, 'sync', this.render);

    var editFormView = new HabitrackApp.Views.HabitForm({
      habit: this.habit,
      habits: this.habits
    });
    this.addSubview('.edit-habit-form', editFormView);

    var habitDaysView = new HabitrackApp.Views.HabitDays({
      currentHabitDays: this.habit.currentHabitDays(),
      habit: this.habit
    });
    this.addSubview('.days', habitDaysView);

    var habitStatsView = new HabitrackApp.Views.HabitStats({
      habit: this.habit,
      habits: this.habits,
      habitDays: this.habit.currentHabitDays()
      });
    this.addSubview('.stats', habitStatsView);
  },

  events: {
    "mouseenter": "showButtons",
    "mouseleave": "hideButtons",
    "click .delete-habit-btn": "deleteHabit",
    "click .edit-habit-btn": "toggleEditForm",
    "click .cancel-link" : "toggleDaysStats"
  },

  showButtons: function(event) {
    $(event.target).find('.habit-btns').removeClass('hidden');
  },

  hideButtons: function(event) {
    $(event.target).find('.habit-btns').addClass('hidden');
  },

  deleteHabit: function(event) {
    var that = this;
    this.habit.destroy({
      success: function() {
        // wait what? why don't I need this?
        // that.collection.remove(that.model);
      }
    });
  },

  toggleEditForm: function(event) {
    this.$el.find('.edit-habit-form').toggleClass('hidden').find('#habit_title').focus();
    this.toggleDaysStats();
  },

  toggleDaysStats: function(event) {
    this.$el.find('.stats').toggleClass('hidden');
    this.$el.find('.days').toggleClass('hidden');
  },

  render: function() {
    var renderedContent = this.template({
      habit: this.habit
    });
    this.$el.html(renderedContent);
    this.attachSubviews();

    return this;
  }
});
