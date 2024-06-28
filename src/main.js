import { filterData } from './dataFunctions.js';
//import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.getElementById('tarjeta');
const datadetarjetas = renderItems(data);

tarjetadedata.appendChild(datadetarjetas);

const selectCategoria = document.getElementById('filtro-categoria');
const selectAño = document.getElementById('filtro-año');
const selectRanking = document.getElementById('filtro-ranking');

let appliedFilters = {
  category: 'seleccionar',
  yearOfCreation: 'seleccionar',
  ranking: 'seleccionar',
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
  tarjetadedata.innerHTML = '';

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement('h4');
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

const botonLimpiar = document.querySelector('.limpiar-filtros');
function limpiarFiltros() {
  selectCategoria.selectedIndex = 'Seleccionar';
  selectAño.selectedIndex = 'Seleccionar';
  selectRanking.selectedIndex = 'Seleccionar';

  appliedFilters = {
    category: 'seleccionar',
    yearOfCreation: 'seleccionar',
    ranking: 'seleccionar',
  };
  tarjetadedata.innerHTML = '';

  tarjetadedata.appendChild(datadetarjetas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);

/*
const selectOrden = document.getElementById("ordenar");

ordenAlfabetico.addEventListener("change", (event)=>{
  const ordenTarjetas = event.target.value;
  const ascOrden = sortData(data, sortBy: ascendente, ordenTarjetas);
  const ascOrdenTarjetas = renderItems(ascOrden);

  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(ascOrdenTarjetas);

});
*/
const ordenData = (data);
ordenData.sort(function (a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
});
console.log(ordenData);