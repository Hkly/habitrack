var tour = HabitrackApp.tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true,
    showCancelLink: true
  }
});

tour.addStep('step1', {
  title: 'Welcome to HabiTrack!',
  text: 'HabiTrack is an app to help you keep your habits on track!',
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
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('step2', {
  title: 'Check in Your Habits',
  text: 'Select the days you\'ve completed your habit on this week. <br>The bottom right number is the total possible points you<br> can earn this week from doing this habit.<br><br> You can mouse over this habit panel and click on the <br>pencil to edit your habit options including how many days<br> per week you want to do this and its importance. ',
  attachTo: '.habit-piece bottom',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('step3', {
  title: 'Add a Habit',
  text: 'Click this plus sign to add a new habit.',
  attachTo: '#tour-2 bottom',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('step3', {
  title: 'Your Current Score',
  text: 'See how you are doing this week. <br><br>You score 100 points for every week you complete all your habits.',
  attachTo: '#tour-3 left',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('step4', {
  title: 'Visualize Your Progress',
  text: 'Keep an eye on your progress over the last 3 months.',
  attachTo: '#tour-4 left',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('step5', {
  title: 'The More the Merrier',
  text: 'Keep up with your friends. Encourage their progress!<br>You can add friends by clicking on the plus sign.',
  attachTo: '#tour-5 left',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    }, {
      text: 'Next',
      action: tour.next,
      classes: 'shepherd-button-primary'
    }
  ]
});

tour.addStep('stepLast', {
  text: 'Click here if you ever want the grand tour again!',
  attachTo: '#tour-btn bottom',
  classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: tour.back
    },{
      text: 'Done',
      classes: 'shepherd-button-primary',
      action: function() {
        return tour.hide();
      }
    }
  ]
});
