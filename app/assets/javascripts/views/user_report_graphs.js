HabitrackApp.Views.UserReportGraphs = Backbone.View.extend({
  template: JST["sidebar/report_graphs"],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.createGraph);
  },

  createGraph: function() {

    var ctx = document.getElementById("main-chart").getContext("2d");
    var data = {
    labels: ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk6", "wk6", "wk6", "wk6", "wk6", "wk6", "wk6", ],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(113, 140, 221, 0.5)",
            strokeColor: "rgba(114, 147, 222, 0.85)",
            highlightFill: "rgba(56, 108, 232, 0.5)",
            highlightStroke: "rgba(114, 147, 222, 0.85)",
            data: [65, 59, 80, 81, 56, 55, 75, 77, 78, 90, 85, 88, 92]
        }
      ]
    };

    var myBarChart = new Chart(ctx).Bar(data, {
      scaleShowGridLines: false,
      barValueSpacing: 1,
      showScale: false
      });
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    return this;
  }
});
