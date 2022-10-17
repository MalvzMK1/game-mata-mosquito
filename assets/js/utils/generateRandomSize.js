const generateRandomSize = () => {
  let iconClass = Math.floor(Math.random() * 3);

  switch(iconClass) {
    case 0:
      return 'smallFly';

    case 1:
      return 'mediumFly';

    case 2:
      return 'bigFly';
  }
};

export { generateRandomSize };