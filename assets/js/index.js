const startButton = document.querySelector('#start-button');

const startGame = (el) => {
  const level = document.querySelector('#difficulty-selection').value;

  if (level !== 'default') {
    el.preventDefault();
    localStorage.setItem('level', level);
    location.href = './assets/pages/game.html';
  }
  else {
    startButton.style = 'background-color: #be2626';
    alert('Escolha um nível');
  }
}

startButton.addEventListener('click', startGame)