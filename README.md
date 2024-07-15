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

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por las
usuarias, al lado derecho.

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que vas a generar con [prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/).
Esta página web se adecuará a lo que descubras que tu usuaria
necesita.

Además, en este proyecto utilizarás herramientas de
[inteligencia artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial)
como [ChatGPT](https://openai.com/chatgpt), [ExplainDev](https://explain.dev/),
entre otras para generar un set de datos en un archivo javascript.

El propósito de generar los datos en esta manera es brindarte la oportunidad de
adentrarte en el empleo de herramientas impulsadas por la inteligencia
artificial, así como en [técnicas de prompting](https://learnprompting.org/es/docs/intro).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**. Con estadística
nos referimos a distintos cálculos que puedes hacer con los datos para mostrar
información aún más relevante a las usuarias (promedio, el valor máximo
o mínimo, etc).

## 3. Historia de Usuario

*¿Quiénes son las principales usuarias del producto?
Personas usuarias de entre 15 y 35 años apasionadas por el mundo de los videojuegos. Nuestras personas usuarias son jugadores novatos que buscan introducirse en este universo. Son individuos curiosos y entusiastas, que buscan información detallada sobre los videojuegos. Además, les interesa explorar diversas plataformas, géneros y estilos de juego, y aprecian una interfaz intuitiva que facilite la navegación y búsqueda de contenido relevante.

*¿Cuáles son los objetivos de estas usuarias en relación con el producto?
Buscar nuevos juegos para jugar en categorías de su interés. 

*¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
El año de creación: porque quieren jugar juegos con tecnología moderna.
La categoría: porque cada persona usuaria tiene su preferencia de jugabilidad 
El ranking: porque quieren jugar juegos que sepan que son buenos

*¿Cuándo utilizan o utilizarían el producto?
Cuando hayan terminado un juego y quieran empezar uno nuevo y quieran alguna recomendación. 


## 4. Prototipado

Prototipo en baja fidelidad
<img src="src/img/Prototipo en Baja.PNG">

Prototipo en alta fidelidad
<img src="src/img/Prototipo en Alta.PNG">

## 5. Prompting Inteligencia Artificial

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**.

Aquí definimos en más detalle las funcionalidades mínimas que debe
tener:

* La aplicación debe permitir a la usuaria ver los items de la data en una visualización,
  que puede ser [tipo tarjetas](http://www.uxables.com/diseno-ux-ui/que-es-y-como-disenar-una-card/)
  o cualquier otra forma que tú decidas como la adecuada (pero desde aquí
  referimos a los items como "tarjetas"). **Cada una de las tarjetas debe estar
  contenida en un elemento `<li>` y estos a su vez contenido en
  un elemento `<ul>`.**

## 6. Tests

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**.

Aquí definimos en más detalle las funcionalidades mínimas que debe
tener:

* La aplicación debe permitir a la usuaria ver los items de la data en una visualización,
  que puede ser [tipo tarjetas](http://www.uxables.com/diseno-ux-ui/que-es-y-como-disenar-una-card/)
  o cualquier otra forma que tú decidas como la adecuada (pero desde aquí
  referimos a los items como "tarjetas"). **Cada una de las tarjetas debe estar
  contenida en un elemento `<li>` y estos a su vez contenido en
  un elemento `<ul>`.**

