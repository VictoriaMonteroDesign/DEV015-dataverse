// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  console.log('Filtrando datos por:', filterBy, value);

  if (value === 'Seleccionar') {
    return data; 
  }

  // Filtrar los datos
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