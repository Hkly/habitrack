HabitrackApp.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: HabitrackApp.Models.User
});

HabitrackApp.Collections.users = new HabitrackApp.Collections.Users();
