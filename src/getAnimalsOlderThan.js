const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((element) => element.name === animal)
    .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('lions', 5));
module.exports = getAnimalsOlderThan;
