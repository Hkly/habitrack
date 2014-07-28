HabitrackApp.Views.UserReportGraphs = Backbone.View.extend({
  template: JST["sidebar/report_graphs"],

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    return this;
  }
});
