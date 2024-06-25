import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const tarjetadedata = document.querySelector('#tarjeta');
const datadetarjetas = renderItems(data);
//const tarjeta = document.getElementById(tarjeta);

tarjetadedata.appendChild(datadetarjetas);

// Seleccionar el elemento <select> y añadir un manejador de eventos
const filterSelect = document.getElementById('filter-select');
filterSelect.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  // Invocar la función filterData con 'category' como filterBy
  const filteredData = filterData(data, 'facts.category', selectedValue);
  const filteredItems = renderItems(filteredData);

  // Limpiar el contenedor antes de agregar los nuevos elementos filtrados
  tarjetadedata.innerHTML = '';
  tarjetadedata.appendChild(filteredItems);
});