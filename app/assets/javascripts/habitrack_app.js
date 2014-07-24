window.HabitrackApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new HabitrackApp.Routers.Habits();
    Backbone.history.start();
  }
};
