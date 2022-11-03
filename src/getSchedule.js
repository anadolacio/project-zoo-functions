const data = require('../data/zoo_data');

const { hours, species } = data;
const weekdays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = species.map((animal) => animal.name);
// console.log(animals);
const findDay = {};
weekdays.forEach((day) => {
  findDay[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((specie) =>
      specie.availability.includes(day)).map((animal) => animal.name),
  };
});

findDay.Monday.officeHour = 'CLOSED';
findDay.Monday.exhibition = 'The zoo will be closed!';

function getDay(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    const resultMonday = {};
    resultMonday[scheduleTarget] = findDay[scheduleTarget];
    return resultMonday;
  }
  const result = {};
  result[scheduleTarget] = findDay[scheduleTarget];
  return result;
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }

  if (weekdays.includes(scheduleTarget)) return getDay(scheduleTarget);

  return findDay;
}

console.log(getSchedule('penguins'));
// [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]

module.exports = getSchedule;
