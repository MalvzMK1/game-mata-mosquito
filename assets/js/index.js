const startGame = (el) => {
  const level = document.querySelector('#difficulty-selection').value;

  if (level !== 'default') {
    location.href = `./assets/pages/game.html?${level}`;
  }
  else 
    alert('Escolha um nível');
}

document.querySelector('#start-button').addEventListener('click', startGame)