import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const tarjetadedata = document.querySelector('#tarjeta');
const datadetarjetas = renderItems(data);
//const tarjeta = document.getElementById(tarjeta);

tarjetadedata.appendChild(datadetarjetas);



