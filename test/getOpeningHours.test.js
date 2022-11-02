const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('retorna valor correto se for chamada uma função vazia', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('retorna valor correto se for chamada uma função com parâmtro para fechar', () => {
    expect(getOpeningHours('Monday', '10:10-AM')).toBe('The zoo is closed');
  });
  it('retorna valor correto se for chamada uma função com parâmetro para abrir', () => {
    expect(getOpeningHours('Tuesday', '10:10-AM')).toBe('The zoo is open');
  });
  it('retorna erro se for chamada uma função com parâmetro incompleto', () => {
    expect(getOpeningHours('Tue', '10:10-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('retorna erro se for chamada uma função com parâmetro errado', () => {
    expect(getOpeningHours('Friday', '10:10-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('retorna erro se for chamada uma função com parâmetro hora errada', () => {
    expect(getOpeningHours('Friday', 'C0:10-AM')).toThrow('The hour should represent a number');
  });
  it('retorna erro se for chamada uma função com parâmetro minutos errado', () => {
    expect(getOpeningHours('Friday', '10:c0-AM')).toThrowErrorMatchingSnapshot('The minutes should represent a number');
  });
  it('retorna erro se for chamada uma função com parâmetro hora fora do range', () => {
    expect(getOpeningHours('Friday', '32:10-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('retorna erro se for chamada uma função com parâmetro hora fora do range', () => {
    expect(getOpeningHours('Friday', '10:79-AM')).toThrow('The minutes should represent a number');
  });
});
