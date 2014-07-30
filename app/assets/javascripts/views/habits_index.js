HabitrackApp.Views.HabitsIndex = Backbone.CompositeView.extend({
  template: JST['habits/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addHabit);
    this.listenTo(this.collection, 'remove', this.removeHabit);

    var that = this;
    this.collection.each(function(habit){
      that.addHabit(habit);
    });

    var newFormView = new HabitrackApp.Views.HabitForm({
      model: new HabitrackApp.Models.Habit(),
      collection: this.collection
    });
    this.addSubview('.new-habit-form', newFormView);

    var userSideView = new HabitrackApp.Views.UserSide({
      collection: this.collection
    });
    this.addSubview('.right-side', userSideView);
  },

  events: {
    "click button.add-new-habit": "showNewForm",
    "click .cancel-link": "showAddButton", // TODO: how to make only for .save-selections
    "click button#tour-btn": "launchTour"
  },

  showNewForm: function(event) {
    this.$el.find('.new-habit-form').removeClass('hidden').find('#habit_title').focus();
    this.$el.find('.add-new-habit').addClass('hidden');

  },

  showAddButton: function(event) {
    this.$el.find('.add-new-habit').removeClass('hidden');
  },

  addHabit: function(habit) {
    var habitPiece = new HabitrackApp.Views.HabitPiece({
      model: habit,
      collection: this.collection
    });
    this.addSubview('.habits', habitPiece);
  },

  removeHabit: function(habit) {
    var views = this.subviews('.habits');
    var view = _.find(views, function(view) {
      return view.model.id == habit.id;
    });
    this.removeSubview('.habits', view);
  },

  launchTour: function(){
    var tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true,
        showCancelLink: true
      }
    });

    tour.addStep('step1', {
      title: 'Welcome to HabiTrack!',
      text: 'This would help you get started with this application!',
      attachTo: '.navbar bottom',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
    });

    tour.addStep('step2', {
      title: 'Add a Habit',
      text: 'Add new habits here!',
      attachTo: '#tour-2 right',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
    });

    tour.addStep('step3', {
      title: 'Your current score',
      text: 'See how you are doing',
      attachTo: '#tour-3 left',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
    });

    tour.addStep('step4', {
      title: 'Graphs!',
      text: 'Graphs are shiny. So much data.',
      attachTo: '#tour-4 left',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
    });

    tour.addStep('step5', {
      title: 'Have friends',
      text: 'Keep up with your friends. Encourage their progress!',
      attachTo: '#tour-5 left',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
    });

    tour.addStep('stepLast', {
      text: 'Click here if you ever want the grand tour again!',
      attachTo: '#tour-btn bottom',
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: function() {
            return tour.hide();
          }
        }
      ]
    });

    tour.start();
  },

  render: function () {
    console.log("index rerender!!")
    var renderedContent = this.template(); // do i need locals?
    this.$el.html(renderedContent);
    this.attachSubviews();

    $('.habits').sortable();

    return this;
  }
});
