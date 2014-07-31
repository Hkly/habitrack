HabitrackApp.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  friends: function() {
    if (!this._friends) {
      this._friends = new HabitrackApp.Collections.Users([]);
    }
    return this._friends;
  },

  parse: function(jsonResponse) {
    if (jsonResponse.friends) {
      this.friends().set(jsonResponse.friends, {parse: true});
      delete jsonResponse.friends;
      // delete friends property from jsonResponse.
    }
    return jsonResponse;
  }
});
