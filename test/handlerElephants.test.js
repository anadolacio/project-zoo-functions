const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna undefined se for chamada uma função vazia', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('retorna "Parâmetro inválido, é necessário uma string" se for chamada uma função com string de parâmetro', () => {
    expect(handlerElephants(12)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('retorna o conteúdo do parâmetro se for chamada uma função com parâmetro válido', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('retorna o valor do correto se for chamada uma função com parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna o valor do correto se for chamada uma função com parâmetro names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna o valor do correto se for chamada uma função com parâmetro names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna o valor do correto se for chamada uma função com parâmetro averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('retorna o valor do correto se for chamada uma função com parâmetro nulo', () => {
    expect(handlerElephants('elefante')).toBeNull();
  });
});
