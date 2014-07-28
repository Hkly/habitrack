HabitrackApp.Views.UserSide = Backbone.CompositeView.extend({
  template: JST["sidebar/user_side"],

  initialize: function() {
    var mainScoreView = new HabitrackApp.Views.UserMainScore();
    this.addSubview('.main-score', mainScoreView);
  },

  render: function(){
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  }
});
