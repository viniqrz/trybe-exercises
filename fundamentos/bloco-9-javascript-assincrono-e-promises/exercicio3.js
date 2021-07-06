const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
};

setTimeout(() => {
  getPlanet();
}, 4 * 1000); // imprime Marte depois de 4 segundos
