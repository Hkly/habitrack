HabitrackApp.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: HabitrackApp.Models.User,

  getOrFetch: function(id) {
    var user = this.get(id);
    var that = this;
    if (user) {
      user.fetch();
    } else {
      user = new HabitrackApp.Models.User({id: id});
      user.fetch({
        success: function() {
          that.add(user);
        }
      });
    }
    return user;
  }
});

HabitrackApp.Collections.users = new HabitrackApp.Collections.Users();
