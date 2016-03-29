HabitrackApp.Views.HabitsIndex = Backbone.CompositeView.extend({
  template: JST['habits/index'],

  initialize: function(opts) {
    this.habits = opts.habits;
    this.listenTo(this.habits, 'sync', this.render);
    this.listenTo(this.habits, 'add', this.addHabit);
    this.listenTo(this.habits, 'remove', this.removeHabit);

    this.habits.each(this.addHabit.bind(this));

    var newFormView = new HabitrackApp.Views.HabitForm({
      habit: new HabitrackApp.Models.Habit(),
      habits: this.habits
    });
    this.addSubview('.new-habit-form', newFormView);

    var userSideView = new HabitrackApp.Views.UserSide({
      habits: this.habits
    });
    this.addSubview('.right-side', userSideView);
  },

  events: {
    "click .add-new-habit": "toggleNewForm",
    "click .cancel-link": "showAddButton", // TODO: how to make only for .save-selections
    "click #tour-btn": "launchTour"
  },

  toggleNewForm: function(event) {
    var $newHabitForm = this.$el.find('.new-habit-form');
    $newHabitForm.toggleClass('hidden').find('#habit_title').focus();
  },

  showAddButton: function(event) {
    this.$el.find('.add-new-habit').removeClass('hidden');
  },

  addHabit: function(habit) {
    var habitPiece = new HabitrackApp.Views.HabitPiece({
      habit: habit,
      habits: this.habits
    });
    this.addSubview('.habits', habitPiece);
  },

  removeHabit: function(habit) {
    var views = this.subviews('.habits');
    var view = _.find(views, function(view) {
      return view.habit.id == habit.id;
    });
    this.removeSubview('.habits', view);
  },

  launchTour: function(){
    HabitrackApp.tour.start();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();

    $('.habits').sortable();

    return this;
  }
});
