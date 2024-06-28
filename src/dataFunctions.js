// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  console.log('Filtrando datos por:', filterBy, value);

  if (value === 'Seleccionar') {
    return data;
  }

  const filteredData = data.filter(item => {
    const keys = filterBy.split('.');
    let filteredItem = item;

    keys.forEach(key => {
      filteredItem = filteredItem[key];
    });

    return filteredItem === value;
  });

  return filteredData;
};


/*
export const sortData = (data, sortBy, sortOrder) => {
  console.log('ordenar:', sortBy, sortOrder);

  const sortedData = data.sort();

  return sortedData

}*/
