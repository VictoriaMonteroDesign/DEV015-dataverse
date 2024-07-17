import { filterData, ordenarABC } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filter', () => {

  it('Filter debe retornar 2 cuando aplicamos un filtro de ranking de 4.5', () => {
    //Arrange - Preparar
    //import { data as fakeData } from './data.js';
    const filterBy =  'facts.ranking';
    const value = '4.5'
    //Action - Accionar
    const result = filterData(fakeData,filterBy, value)
    //Asset - Confirmar
    expect(result.length).toBe(2);
  });
  it('Filter debe retornar la misma data cuando el valor es Seleccionar', () => {
    expect(filterData(fakeData, 'facts.ranking', 'Seleccionar')).toEqual(fakeData);
  });
});

describe('sort', () => {

  it('Sort debe retornar la misma data cuando el valor es Seleccionar', () => {
    expect(ordenarABC(fakeData, 'Seleccionar')).toEqual(fakeData);
  });

  it('Sort debe retornar la data ordenada a-z cuando el valor seleccionado es Ascendente', () => {
    expect(ordenarABC(fakeData, 'Ascendente')).toEqual(fakeData.sort(function (a, b) { return a - b; }));
  });
  it('Sort debe retornar la data ordenada z-a cuando el valor seleccionado es Descendente', () => {

    expect(ordenarABC(fakeData, 'Descendente')).toEqual(fakeData.sort(function (a, b) { return b - a; }));
  });
});
