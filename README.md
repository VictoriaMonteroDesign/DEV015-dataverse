# Dataverse

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historia de Usuario](#3-historia-de-usuario)
* [4. Prototipado](#4-prototipado)
* [5. Prompting Inteligencia Artificial](#5-prompting-inteligencia-artificial)
* [6. Tests](#6-tests)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
las usuarias, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

## 2. Resumen del proyecto

En este proyecto se construyo una pagina web para visualizar un
conjunto de datos, que fueron generados en inteligencia artificial.
Esta página web se adecuaa lo que la persona usuaria necesita.

Esta página web que permite visualizar la data, filtrarla, 
ordenarla y calcular algunas estadísticas.

## 3. Historia de Usuario

<b>*¿Quiénes son las principales usuarias del producto?</b>

Personas usuarias de entre 15 y 35 años apasionadas por el mundo de los videojuegos. Nuestras personas usuarias son jugadores novatos que buscan introducirse en este universo. Son individuos curiosos y entusiastas, que buscan información detallada sobre los videojuegos. Además, les interesa explorar diversas plataformas, géneros y estilos de juego, y aprecian una interfaz intuitiva que facilite la navegación y búsqueda de contenido relevante.

<b>*¿Cuáles son los objetivos de estas usuarias en relación con el producto?</b>

Buscar nuevos juegos para jugar en categorías de su interés. 

<b>*¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?</b>

El año de creación: porque quieren jugar juegos con tecnología moderna.
La categoría: porque cada persona usuaria tiene su preferencia de jugabilidad 
El ranking: porque quieren jugar juegos que sepan que son buenos

<b>*¿Cuándo utilizan o utilizarían el producto?</b>

Cuando hayan terminado un juego y quieran empezar uno nuevo y quieran alguna recomendación. 


## 4. Prototipado

<b>Prototipo en baja fidelidad </b>

<img src="src/img/Prototipo en Baja.PNG">

<b>Prototipo en alta fidelidad </b>

<img src="src/img/Prototipo en Alta.PNG">

## 5. Prompting Inteligencia Artificial

<b>Prompting de Data</b>

<img src="src/img/Chat Gpt Prompt Data 01.png">

<img src="src/img/Chat Gpt Prompt Data 02.png">

## 6. Tests

npm run test:oas-prompting

<img src="src/img/Tests de Prompting.PNG">
