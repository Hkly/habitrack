var tour = HabitrackApp.tour = new Shepherd.Tour({
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
  text: 'blah blah',
  attachTo: '.habit-piece bottom',
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
  title: 'Add a Habit',
  text: 'Add new habits here!',
  attachTo: '#tour-2 bottom',
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
