const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const countChild = entrants.filter((entrant) => entrant.age < 18).length;
  const countAdult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const countSenior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: countChild, adult: countAdult, senior: countSenior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const numberOfVisitants = countEntrants(entrants);
  const priceChild = numberOfVisitants.child * prices.child;
  const priceAdult = numberOfVisitants.adult * prices.adult;
  const priceSenior = numberOfVisitants.senior * prices.senior;
  return priceChild + priceAdult + priceSenior;
}

console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
