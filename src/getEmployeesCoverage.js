const data = require('../data/zoo_data');

const { employees, species } = data;

function getInformationsByName(parameter) {
  const findEmployee = employees.find((employee) =>
    employee.firstName === parameter.name || employee.lastName === parameter.name);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = findEmployee;
    const animals = responsibleFor.map((animal) => species.find((specie) =>
      specie.id === animal).name);
    const findLocations = animals.map((animal) =>
      species.find((specie) => specie.name === animal).location);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: animals,
      locations: findLocations,
    };
  }
}

function getInformationsById(parameter) {
  const findEmployee = employees.find((employee) =>
    employee.id === parameter.id);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = findEmployee;
    const animals = responsibleFor.map((animal) => species.find((specie) =>
      specie.id === animal).name);
    const findLocations = animals.map((animal) =>
      species.find((specie) => specie.name === animal).location);

    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: animals,
      locations: findLocations,
    };
  }
}

function getEmployeesCoverage(parameter) {
  if (!parameter) {
    return employees.map((employee) => ({ id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((animal) => animal.name),
      locations: species.filter((specie) => employee.responsibleFor.includes(specie.id))
        .map((animal) => animal.location),
    }));
  }
  // verificar se a propriedade name tem no objeto passado.

  if ('name' in parameter) {
    return getInformationsByName(parameter);
  }
  // verificar se a propriedade id tem no objeto passado.
  if ('id' in parameter) {
    return getInformationsById(parameter);
  }
}

module.exports = getEmployeesCoverage;
