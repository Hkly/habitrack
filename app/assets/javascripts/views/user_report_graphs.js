HabitrackApp.Views.UserReportGraphs = Backbone.View.extend({
  template: JST["sidebar/report_graphs"],

  initialize: function(opts) {
    this.habits = opts.habits;
    this.randomData = opts.randomData;
    this.listenToOnce(this.habits, 'sync', this.createGraph);
    this.listenTo(this.habits, 'sync change_habit_days', this.updateNow);
  },

  createGraph: function() {
    var ctx = document.getElementById("main-chart").getContext("2d");
    var data = {
      labels: [
        "wk1",
        "wk2",
        "wk3",
        "wk4",
        "wk5",
        "wk6",
        "wk7",
        "wk8",
        "wk9",
        "wk10",
        "wk11",
        "wk12",
        "now"
      ],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(64, 124, 189, 0.82)",
          highlightFill: "rgb(67, 140, 204)",
          data: this.randomData
        }
      ]
    };

    this.mainChart = new Chart(ctx).Bar(data, {
      scaleShowGridLines: false,
      barShowStroke: false,
      barValueSpacing: 1,
      showScale: false
      });
  },

// move this into a model or collection or something
  getStackData: function() {
    var days = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
    var data = [0, 0, 0, 0, 0, 0, 0];

    this.habits.each(function(habit) {
      habit.currentHabitDays().each(function(habitDay) {
        var dataPos = days.indexOf(habitDay.get('day'));
        data[dataPos] += habit.pointsPerDay();
      });
    });
    return data;
  },

  createStackChart: function () {
    var test = d3.select(".stack-chart-box").selectAll("div")
      .data(this.getStackData())
      .transition()
      .duration(1000)
      .attr("class", function(data){
        return data === 0 ? "hidden" : "";
      })
      .style("height", "25px")
      .style("width", function(data){
        return (data * 3.2) + 'px';
      })
      .style("background-color", "rgb(65, 132, 191)");



    // setTimeout(function() {
    //   $(".stack-chart-box > div").not(".hidden").last().addClass("end-round");
    // }, 1100);
    // $(".stack-chart-box > div").not(".hidden").last().css("border-top-right-radius", "2px");
    // $(".stack-chart-box > div").not(".hidden").last().css("border-bottom-right-radius", "2px");
  },

  updateNow: function() {
    this.createStackChart();
    var totalPoints = Math.floor(this.habits.totalPoints());
    var latestBar = this.mainChart.datasets[0].bars[12];

    latestBar.value = (totalPoints > 100 ? 100 : totalPoints);
    this.mainChart.update();
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    return this;
  }
});
