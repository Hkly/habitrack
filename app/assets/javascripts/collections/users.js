HabitrackApp.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: HabitrackApp.Models.User
});
