HabitrackApp.Views.HabitsIndex = Backbone.CompositeView.extend({
  template: JST['habits/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addHabit);

    var that = this;
    this.collection.each(function(habit){
      that.addHabit(habit);
    });
  },

  addHabit: function(habit) {
    var habitPiece = new HabitrackApp.Views.HabitPiece({
      model: habit
    });
    this.addSubview('.habits', habitPiece);
  },

  render: function () {
    var renderedContent = this.template(); // do i need locals?
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
