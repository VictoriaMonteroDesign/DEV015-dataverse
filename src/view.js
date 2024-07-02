export const renderItems = (data) => {
  //console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ul = document.createElement("ul");
  data.forEach(item => {
    const li = document.createElement('li');

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;

    const shortDescriptionElement = document.createElement('p');
    shortDescriptionElement.textContent = item.shortDescription;

    const imageUrlElement = document.createElement('img');
    imageUrlElement.setAttribute("src", item.imageUrl);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;

    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Categoría: ${item.facts.category}`;

    const yearOfCreationElement = document.createElement('p');
    yearOfCreationElement.textContent = `Año de Creación: ${item.facts.yearOfCreation}`;

    const rankingElement = document.createElement('p');
    rankingElement.textContent = `Calificación: ${item.facts.ranking}`;

    li.appendChild(nameElement);
    li.appendChild(shortDescriptionElement);
    li.appendChild(imageUrlElement);
    li.appendChild(descriptionElement);
    li.appendChild(categoryElement);
    li.appendChild(yearOfCreationElement);
    li.appendChild(rankingElement);


    ul.appendChild(li);
  });

  return ul;
};


/*
document.body.onload = addElement;

function addElement() {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("ul");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

console.log();*/