const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const newAnimals = {};
    species.forEach((specie) => { newAnimals[specie.name] = specie.residents.length; });
    return newAnimals;
  }

  if (animal.sex === undefined) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }

  return species.find((element2) =>
    element2.name === animal.specie).residents.filter((resident) =>
    resident.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
