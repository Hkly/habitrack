HabitrackApp.Views.HabitsIndex = Backbone.CompositeView.extend({
  template: JST['habits/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addHabit);
    this.listenTo(this.collection, 'remove', this.removeHabit);

    var that = this;
    this.collection.each(function(habit){
      that.addHabit(habit);
    });

    var newFormView = new HabitrackApp.Views.HabitForm({
      model: new HabitrackApp.Models.Habit(),
      collection: this.collection
    });
    this.addSubview('.new-habit-form', newFormView);

    var userSideView = new HabitrackApp.Views.UserSide({
      collection: this.collection
    });
    this.addSubview('.right-side', userSideView);
  },

  events: {
    "click button.add-new-habit": "showNewForm",
    "click .cancel-link": "showAddButton"
  },

  showNewForm: function(event) {
    this.$el.find('.new-habit-form').removeClass('hidden').find('#habit_title').focus();
    this.$el.find('.add-new-habit').addClass('hidden');

  },

  showAddButton: function(event) {
    this.$el.find('.add-new-habit').removeClass('hidden');
  },

  addHabit: function(habit) {
    var habitPiece = new HabitrackApp.Views.HabitPiece({
      model: habit
    });
    this.addSubview('.habits', habitPiece);
  },

  removeHabit: function(habit) {
    var views = this.subviews('.habits');
    var view = _.find(views, function(view) {
      return view.model.id == habit.id;
    });
    this.removeSubview('.habits', view);
  },

  render: function () {
    console.log("index rerender")
    var renderedContent = this.template(); // do i need locals?
    this.$el.html(renderedContent);
    this.attachSubviews();

    $('.habits').sortable();

    return this;
  }
});
