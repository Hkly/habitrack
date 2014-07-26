HabitrackApp.Models.HabitDay = Backbone.Model.extend({
  initialize: function(attributes, options) {
    this.model= options.model;
  },

  url: function () {
    return "api/habits/" + this.model.id + "/habit_days";
  }
});
