const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Stefan', 'Adrian', 'Bogdan', 'Pawel', 'Karol', 'Franek'];
const femaleNames = ['Karolina', 'Magda', 'Julia', 'Stanislawa', 'Fryderyka', 'Monika', 'Marlena'];
const lastNames = ['Sadowski', 'Kowalski', 'Tokarz', 'Stańczak', 'Baran'];

const randChoice = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const people = [];

for (i = 0; i < 20; i ++) {
  const gender = randChoice(genders);
  const firstName = ( gender == 'M' ) ? randChoice(maleNames): randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;

  const person = {
    gender,
    firstName,
    lastName,
    age,
  };

  people.push(person)
};

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});