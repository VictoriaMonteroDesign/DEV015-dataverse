import { filterData } from './dataFunctions.js';
import { ordenarABC } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.querySelector('#root');
const datadetarjetas = renderItems(data);

tarjetadedata.appendChild(datadetarjetas);

const selectCategoria = document.querySelector('#filtro-categoria');
const selectAño = document.querySelector('#filtro-año');
const selectRanking = document.querySelector('#filtro-ranking');
const selectOrdenar = document.querySelector('#ordenar');

let appliedFilters = {
  category: 'seleccionar',
  yearOfCreation: 'seleccionar',
  ranking: 'seleccionar',
  orden: 'seleccionar',
};

const applyFilters = () => {
  let filteredData = data;

  if (appliedFilters.category !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.category', appliedFilters.category);
  }


  if (appliedFilters.yearOfCreation !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.yearOfCreation', appliedFilters.yearOfCreation);
  }

  if (appliedFilters.ranking !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.ranking', appliedFilters.ranking);
  }

  if (appliedFilters.orden !== 'seleccionar') {
    filteredData = ordenarABC(filteredData, appliedFilters.orden);
  }
  tarjetadedata.innerHTML = '';

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement('h3');
    noResultsMessage.textContent = 'No se encontraron coincidencias';
    tarjetadedata.appendChild(noResultsMessage);

  } else {
    const filteredItems = renderItems(filteredData);
    tarjetadedata.appendChild(filteredItems);
  }
};

applyFilters();

selectCategoria.addEventListener('change', (event) => {
  appliedFilters.category = event.target.value;
  applyFilters();
});

selectAño.addEventListener('change', (event) => {
  appliedFilters.yearOfCreation = event.target.value;
  applyFilters();
});

selectRanking.addEventListener('change', (event) => {
  appliedFilters.ranking = event.target.value;
  applyFilters();
});

selectOrdenar.addEventListener('change', (event) => {
  appliedFilters.orden = event.target.value;
  applyFilters();
});


const botonLimpiar = document.querySelector('.limpiar-filtros');
function limpiarFiltros() {
  selectCategoria.selectedIndex = 'Seleccionar';
  selectAño.selectedIndex = 'Seleccionar';
  selectRanking.selectedIndex = 'Seleccionar';
  selectOrdenar.selectedIndex = 'Seleccionar';

  appliedFilters = {
    category: 'seleccionar',
    yearOfCreation: 'seleccionar',
    ranking: 'seleccionar',
    orden: 'seleccionar',
  };
  tarjetadedata.innerHTML = '';

  tarjetadedata.appendChild(datadetarjetas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);



const calcularRankingPromedio = (data, year) => {
  // Filtrar los datos para obtener solo los juegos del año especificado
  const juegosDelAño = data.filter(item => item.facts.yearOfCreation === year);

  // Usar reduce para sumar los rankings
  const sumaDeRankings = juegosDelAño.reduce((sum, item) => sum + parseFloat(item.facts.ranking), 0);

  // Calcular el promedio
  const rankingPromedio = sumaDeRankings / juegosDelAño.length;

  return rankingPromedio;
};

// Ejemplo de uso con el año 2016
const rankingPromedio2016 = calcularRankingPromedio(data, "2016");
const rankingAv2016 = document.getElementById('rankingPromedio2016');
rankingAv2016.textContent = `${rankingPromedio2016.toFixed(1)}`;





/*const analisisDeData = computeStats(data);
function computeStats (){
  return selectRanking.reduce
}

console.log(selectRanking.reduce);*/


