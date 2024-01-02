const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.style.padding = '8px 16px';
nameInput.style.margin = '16px';

nameInput.addEventListener('input', (event) => {
    const trimmedValue = event.target.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
});
