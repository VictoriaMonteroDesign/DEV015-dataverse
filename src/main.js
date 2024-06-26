import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.getElementById('tarjeta');
const datadetarjetas = renderItems(data);

//const tarjeta = document.getElementById(tarjeta);

tarjetadedata.appendChild(datadetarjetas);

const filtroCategoria = document.getElementById('filtro-categoria');
const filtroAño = document.getElementById('filtro-año');
const filtroRanking = document.getElementById('filtro-ranking');

filtroCategoria.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  const filteredData = filterData(data, 'facts.category', selectedValue);
  const filteredItems = renderItems(filteredData);

  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(filteredItems);
});


const selectCategoria = document.getElementById("filtro-categoria");
const selectAño = document.getElementById("filtro-año");
const selectRanking = document.getElementById("filtro-ranking");
const botonLimpiar = document.querySelector('.limpiar-filtros');

function limpiarFiltros() {
  selectCategoria.selectedIndex = 'Seleccionar';
  selectAño.selectedIndex = 'Seleccionar';
  selectRanking.selectedIndex = 'Seleccionar';

  //cómo elimino las opciones filtradas? 
  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(datadetarjetas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);



filtroAño.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  
  const filteredDataAño = filterData(data, 'facts.yearOfCreation', selectedValue);
  const filteredItemsAño = renderItems(filteredDataAño);

  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(filteredItemsAño);
});

filtroRanking.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  const filteredDataRanking = filterData(data, 'facts.ranking', selectedValue);
  const filteredItemsRanking = renderItems(filteredDataRanking);

  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(filteredItemsRanking);
});

