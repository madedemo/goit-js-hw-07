function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;

  if(amount < 1 || amount > 100) {
    showError('Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes();

  let size = 30;
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += sizeIncrement;
  }

  input.value = '';
}

function showError(message) {
  const errorContainer = document.getElementById('error-container');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message');
  errorContainer.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 3000)
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
