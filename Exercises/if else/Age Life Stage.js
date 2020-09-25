var age = 124;
var life = '';

if (age >= 0 && age <= 1)
  life = 'Infant';

else if (age >= 1 && age <= 3)
  life = 'Todler';

else if (age >= 3 && age <= 5)
  life = 'Pre-Schooler';

else if (age >= 5 && age <= 12)
  life = 'School Aged';

else if (age >= 12 && age <= 19)
  life = 'Adolescent';

else if (age >= 19 && age <= 26)
  life = 'Youth';

else if (age >= 26 && age <= 65)
  life = 'Adult';

else if (age >= 65 && age <= 125)
  life = 'Senior Citizen';

else
  life = 'DECESED';



gs.info('Human Age: ' + age + '  '+ 'Life Stage: ' + life);
