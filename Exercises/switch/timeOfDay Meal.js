timeOfDay = 'Night';
meal = '';

switch (timeOfDay) {

  case 'Morning':
  meal = 'Breakfast';
  break;

  case 'Noon':
  meal = 'Lunch';
  break;


  case 'Evening':
  meal = 'Evening Snacks';
  break;


  case 'Night':
  meal = 'Dinner';
  break;


}


gs.info('People have ' + meal + ' in the ' + timeOfDay + '.')
