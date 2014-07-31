HabitrackApp.Views.UserReportGraphs = Backbone.View.extend({
  template: JST["sidebar/report_graphs"],

  initialize: function(options) {
    this.randomData = options.randomData;
    this.listenToOnce(this.collection, 'sync', this.createGraph);
    this.listenTo(this.collection, 'sync remove change_habit_days', this.updateNow);
  },

  createGraph: function() {
    var ctx = document.getElementById("main-chart").getContext("2d");
    var data = {
    labels: ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk7", "wk8", "wk9", "wk10", "wk11", "wk12", "now"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(64, 124, 189, 0.82)",
            highlightFill: "rgb(67, 140, 204)",
            data: this.randomData
        }
      ]
    };

    var myBarChart = new Chart(ctx).Bar(data, {
      scaleShowGridLines: false,
      barShowStroke: false,
      barValueSpacing: 1,
      showScale: false
      });

    this.mainChart = myBarChart;
  },

  updateNow: function() {

    this.mainChart.datasets[0].bars[12].value = Math.floor(this.collection.totalPoints());
    this.mainChart.update();
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    return this;
  }
});
