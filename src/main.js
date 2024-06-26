import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.querySelector('#tarjeta');
const datadetarjetas = renderItems(data);

//const tarjeta = document.getElementById(tarjeta);

tarjetadedata.appendChild(datadetarjetas);

// Seleccionar el elemento <select> y añadir un manejador de eventos
const filterSelect = document.getElementById('filtro-categoria');
filterSelect.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  // Invocar la función filterData con 'category' como filterBy
  const filteredData = filterData(data, 'facts.category', selectedValue);
  const filteredItems = renderItems(filteredData);

  // Limpiar el contenedor antes de agregar los nuevos elementos filtrados
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

  tarjetadedata.appendChild(datadetarjetas);
}

botonLimpiar.addEventListener("click", limpiarFiltros);


