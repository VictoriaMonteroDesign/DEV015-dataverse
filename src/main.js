import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.getElementById('tarjeta');
const datadetarjetas = renderItems(data);

tarjetadedata.appendChild(datadetarjetas);

const filtroCategoria = document.getElementById('filtro-categoria');
const filtroAño = document.getElementById('filtro-año');
const filtroRanking = document.getElementById('filtro-ranking');

const appliedFilters = {
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

  const filteredItems = renderItems(filteredData);
  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(filteredItems);
};

applyFilters();

filtroCategoria.addEventListener('change', (event) => {
  appliedFilters.category = event.target.value;
  applyFilters();
});

filtroAño.addEventListener('change', (event) => {
  appliedFilters.yearOfCreation = event.target.value;
  applyFilters();
});

filtroRanking.addEventListener('change', (event) => {
  appliedFilters.ranking = event.target.value;
  applyFilters();
});


const selectCategoria = document.getElementById("filtro-categoria");
const selectAño = document.getElementById("filtro-año");
const selectRanking = document.getElementById("filtro-ranking");
const botonLimpiar = document.querySelector('.limpiar-filtros');

function limpiarFiltros() {
  selectCategoria.selectedIndex = 'Seleccionar';
  selectAño.selectedIndex = 'Seleccionar';
  selectRanking.selectedIndex = 'Seleccionar';


  tarjetadedata.appendChild(datadetarjetas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);



