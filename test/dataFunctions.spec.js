import { filterData, ordenarABC } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

describe('filter', () => {

  it('Filter debe retornar 2 cuando aplicamos un filtro de ranking de 4.5', () => {
    expect(filterData(fakeData, 'facts.ranking', '4.5').length).toBe(2);
  });
  it('Filter debe retornar la misma data cuando el valor es Seleccionar', () => {
    expect(filterData(fakeData, 'facts.ranking', 'Seleccionar')).toEqual(fakeData);
  });
});

describe('sort', () => {

  it('Sort debe retornar la misma data cuando el valor es Seleccionar', () => {
    expect(ordenarABC(fakeData, 'Seleccionar')).toEqual(fakeData);
  });
  it('Sort debe retornar la data ordenada a a-z cuan el valor seleccionado es Ascendente', () => {
    expect(ordenarABC(fakeData, 'Ascendente')).toEqual(fakeData.sort(function(a, b){return a - b;}));
  });
  it('Sort debe retornar la data ordenada a a-z cuan el valor seleccionado es Descendente', () => {
    expect(ordenarABC(fakeData, 'Descendente')).toEqual(fakeData.sort(function(a, b){return b - a;}));
  });
});
