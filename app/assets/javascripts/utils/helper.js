// Helpers for fake data

var helpers = HabitrackApp.helpers = {
  makeRandomData: function() {
    var data = [];
    for (var i = 0; i < 12; i++) {
      data.push(Math.floor(Math.random() * 58) + 40);
    }
    data.push(0);
    return data;
  }
};
