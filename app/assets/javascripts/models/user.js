HabitrackApp.Models.User = Backbone.Model.extend({
  urlRoot: function() {
    return "users/" + window.currentUserId + ".json";
  },

  friends: function() {
    if (!this._friends) {
      this._friends = new HabitrackApp.Collections.Users([]);
    }
    return this._friends;
  },

  parse: function(jsonResponse) {
    if (jsonResponse.friends) {
      this.friends().set(jsonResponse.friends, {parse: true});
      // delete habbitDays property from jsonResponse.
    }
    return jsonResponse;
  }
});
