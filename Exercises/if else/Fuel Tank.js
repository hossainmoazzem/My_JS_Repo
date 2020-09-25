var level = 5;
var message = '';

if (level == 0)
  message ='Oops ! Fuel Tank is EMPTY';
else if (level ==1 || level == 2)
  message = 'Warning ! Fuel Tank is running LOW';
else if (level == 3)
  message = 'Fuel Tank is MODERATELY Full';
else if (level == 4)
  message = 'Fuel Tank is almost FULL';
else if (level == 5)
  message = 'Fuel Tank is Full';

gs.info('Fuel Tank Level= ' + level + ' '+  ' Fuel status= ' + message);
