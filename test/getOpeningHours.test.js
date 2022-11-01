const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('retorna valor correto se for chamada uma função vazia', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('retorna valor correto se for chamada uma função vazia', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
});
