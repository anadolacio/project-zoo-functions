const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const animalFind = employees.filter((employee) =>
    employee.id === id).find((element) =>
    element).responsibleFor[0];

  const animals = species.find((specie) => specie.id === animalFind)
    .residents.reduce((acc, currentValue) =>
      (acc.age > currentValue.age ? acc : currentValue));
  return [animals.name, animals.sex, animals.age];
}

module.exports = getOldestFromFirstSpecies;
