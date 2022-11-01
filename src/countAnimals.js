const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {

  species.find((specie) => specie.name === 'elephants');

  const averageAge = ({ residents }) =>
    residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
  
  const computeData = (param, elephants) => {
    switch (param) {
    case 'count':
      return elephants.residents.length;
    case 'names':
      return elephants.residents.map((elephant) => elephant.name);
    case 'averageAge':
      return averageAge(elephants);
    default:
      return null;
    }
  };
  
  const handlerElephants = (param) => {
    if (param === undefined) {
      return undefined;
    }
    if (typeof param !== 'string') {
      return 'Parâmetro inválido, é necessário uma string';
    }
    const elephants = getElephants();
    if (Object.keys(elephants).includes(param)) {
      return elephants[param];
    }
    return computeData(param, elephants);
  };
  if (animal === undefined) {
    const allAnimals = species.forEach((specie) => `${specie.name} : ${specie.residents.length}`);
    return allAnimals;
  }
  if (animal === species.name) {
    return species.find((specie) => specie.name === animal)
      .map((element) => `${element.name}: ${element.residents.length}`);
  }

  return species.filter((specie) => specie.residents.sex === animal.sex).length;
}

console.log(countAnimals());
module.exports = countAnimals;
