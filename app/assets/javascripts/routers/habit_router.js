HabitrackApp.Routers.Habits = Backbone.Router.extend({
  routes: {
    "": 'habitsIndex'
  },

  habitsIndex: function(){
    HabitrackApp.Collections.habits.fetch();
    var indexView = new HabitrackApp.Views.HabitsIndex({
      collection: HabitrackApp.Collections.habits
    });
    this._swapView(indexView);
  },

  _swapView: function(newView) {
    if(this.currentView) {
      this.currentView.remove();
    }

    $("#main").html(newView.render().$el);

    this.currentView = newView;
  }
});
