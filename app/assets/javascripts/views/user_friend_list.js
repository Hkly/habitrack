HabitrackApp.Views.UserFriendList = Backbone.View.extend({
  template: JST['sidebar/friends_list'],

  events: {
    "click button#friend-search-btn": "showSearchForm",
    "submit": "createFriendships"
  },

  showSearchForm: function(event) {
    $(event.currentTarget).parent().find('#friend-search-form').removeClass('hidden');
    $(event.currentTarget).addClass('hidden');
  },

  createFriendships: function(event) {
    event.preventDefault();


    $(event.currentTarget).parent().find('#friend-search-btn').removeClass('hidden');
    $(event.currentTarget).find("#friend-search-form").addClass('hidden');
  },

  getUsers: function(q, cb){
    var names = [];
    HabitrackApp.Collections.users.each(function(user) {
      names.push(user.get('username'));
    });

    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(names, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  },

  setTypeahead: function() {
    this.$('#friend-search .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },{
      name: 'username',
      displayKey: 'value',
      source: this.getUsers
    });
  },

  render: function() {
    var renderedContent = this.template({});

    this.$el.html(renderedContent);

    setTimeout(this.setTypeahead.bind(this), 500);

    return this;
  }
});
