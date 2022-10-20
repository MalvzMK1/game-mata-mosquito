import { generateRandomFlySide } from "./utils/generateRandomFlySide.js";
import { generateRandomSize } from "./utils/generateRandomSize.js";
import { setCronometerTime } from "./utils/setCronometerTime.js";

let windowHeight = 0;
let windowWidth = 0;
let lifes = 3;
let timeRemaining = 10;
setCronometerTime(timeRemaining);

let level = window.location.search.replace('?', '');
alert(level)

const cronometer = setInterval(() => {
  timeRemaining -= 1;

  if (timeRemaining === 0) {
    clearInterval(cronometer);
    clearInterval(createFlies);
    window.document.location.href = './victory.html'
  } else {
    setCronometerTime(timeRemaining);
  }
}, 1000)


const defineWindowDimensions = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
}

defineWindowDimensions();
document.body.onresize = defineWindowDimensions();

const renderImageInRandomPosition = () => {
  if (lifes === 0) {
    window.document.location.href = './game_over.html';
  }

  if (document.querySelector('#fly')) {
    document.querySelector('#fly').remove();
    document.querySelector(`#life${lifes}`).src = '../images/coracao_vazio.png';
    lifes--;
  }

  const container = document.querySelector('body');
  let positionX = Math.floor(Math.random() * windowWidth) - 100;
  let positionY = Math.floor(Math.random() * windowHeight) - 100;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  const fly = document.createElement('img');
  fly.src = '../images/mosquito.png'
  fly.style.left = positionX + 'px';
  fly.style.top = positionY + 'px';
  fly.style.position = 'absolute';
  fly.classList.add(generateRandomSize());
  fly.classList.add(generateRandomFlySide());
  fly.id = 'fly';

  container.appendChild(fly);

  fly.addEventListener('click', (target) => {
    fly.remove()
  })
}

renderImageInRandomPosition();
const createFlies = setInterval(() => {
  renderImageInRandomPosition()
}, 1000);
