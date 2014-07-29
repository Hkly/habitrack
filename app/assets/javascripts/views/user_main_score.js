HabitrackApp.Views.UserMainScore = Backbone.View.extend({
  template: JST['sidebar/main_score'],

  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
  },

  render: function() {
    var renderedContent = this.template({
      habits: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});
