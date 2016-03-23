// Helpers for fake data

var helpers = HabitrackApp.helpers = {
  makeRandomData: function() {
    var data = [];
    for (var i = 0; i < 12; i++) {
      data.push(this.makeRandomScore());
    }
    data.push(0);
    return data;
  },

  makeRandomScore: function() {
    return Math.floor(Math.random() * 58) + 40;
  }
};
