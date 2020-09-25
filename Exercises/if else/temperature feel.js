var temp = -4;
var feel = '';

if (temp <= -1)
  feel = 'Freezing';

else if(temp >=0 && temp < 10)
  feel = 'COLD';

else if (temp >=11 && temp <= 20)
  feel = 'WARM';


else if (temp >=21 && temp <= 30)
  feel = 'HOT';


else if (temp >=31 && temp <= 40)
  feel = 'Very HOT';

else
  feel = 'Unbareable';

gs.info('The temperature of sydney is :' + temp + ''+ ' and its ' + feel);
