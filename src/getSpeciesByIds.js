const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.includes(id));
}

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));

module.exports = getSpeciesByIds;
