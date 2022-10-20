const startGame = (el) => {
  const level = document.querySelector('#difficulty-selection').value;

  if (level !== 'default') {
    el.preventDefault();
    localStorage.setItem('level', level);
    location.href = './assets/pages/game.html';
  }
  else 
    alert('Escolha um nível');
}

document.querySelector('#start-button').addEventListener('click', startGame)