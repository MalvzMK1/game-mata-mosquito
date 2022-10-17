export const generateRandomFlySide = () => {
  let randomSideCode = Math.floor(Math.random() * 2);

  switch (randomSideCode) {
    case 0:
      return 'left-side';

    case 1:
      return 'right-side';
  }
}