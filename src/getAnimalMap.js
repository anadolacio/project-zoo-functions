const data = require('../data/zoo_data');

const { species } = data;

function findanimalsLocation() {
  return {
    locationNE: species.filter((specie) => specie.location === 'NE'),
    locationNW: species.filter((specie) => specie.location === 'NW'),
    locationSE: species.filter((specie) => specie.location === 'SE'),
    locationSW: species.filter((specie) => specie.location === 'SW'),
  };
}
const { locationNE, locationNW, locationSE, locationSW } = findanimalsLocation();

function getAnimals() {
  const findAnimals = (region) => region.map((element) => element.name);
  return {
    NE: findAnimals(locationNE),
    NW: findAnimals(locationNW),
    SE: findAnimals(locationSE),
    SW: findAnimals(locationSW),
  };
}

const residentsName = () => {
  const findResidentsName = (region) => region.map((element) => {
    const animalsNames = {};
    animalsNames[element.name] = element.residents.map((resident) => resident.name);
    return animalsNames;
  });
  return {
    NE: findResidentsName(locationNE),
    NW: findResidentsName(locationNW),
    SE: findResidentsName(locationSE),
    SW: findResidentsName(locationSW),
  };
};
function onlySort() {
  const findResidentsName = (region) => region.map((element) => {
    const animalsNames = {};
    animalsNames[element.name] = element.residents.map((resident) => resident.name).sort();
    return animalsNames;
  });
  return {
    NE: findResidentsName(locationNE),
    NW: findResidentsName(locationNW),
    SE: findResidentsName(locationSE),
    SW: findResidentsName(locationSW),
  };
}

function onlySex(options) {
  const findResidentsName = (region) => region.map((e) => {
    const animalsNames = {};
    animalsNames[e.name] = e.residents.filter((resident) =>
      resident.sex === options.sex).map((animalName) => animalName.name);
    return animalsNames;
  });
  return {
    NE: findResidentsName(locationNE),
    NW: findResidentsName(locationNW),
    SE: findResidentsName(locationSE),
    SW: findResidentsName(locationSW),
  };
}

function keysSortAndSex(options) {
  if (('sorted' in options) && ('sex' in options)) {
    const findResidentsName = (region) => region.map((element) => {
      const animalsNames = {};
      animalsNames[element.name] = element.residents.filter((resident) =>
        resident.sex === options.sex).map((animalName) => animalName.name).sort();
      return animalsNames;
    });
    return {
      NE: findResidentsName(locationNE),
      NW: findResidentsName(locationNW),
      SE: findResidentsName(locationSE),
      SW: findResidentsName(locationSW),
    };
  }
  if (!options.sex) return onlySort();
  if (!options.sort) return onlySex(options);
}

function getAnimalMap(options) {
  if (!options || !('includeNames' in options)) return getAnimals();

  if (('sorted' in options) || ('sex' in options)) return keysSortAndSex(options);

  return residentsName();
}

module.exports = getAnimalMap;
