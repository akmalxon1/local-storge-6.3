
const form = document.querySelector('form');
const keyInput = document.getElementById('key');
const valueInput = document.getElementById('value');
const addButton = document.querySelector('.btn');
const clearButton = document.querySelector('.delete');
const udalitButton = document.querySelector('.udalit');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');


function addKeyValue() {
    const key = keyInput.value.trim();
    const value = valueInput.value.trim();

    if (key && value) {
        h1.textContent = `Key: ${key}`;
        h2.textContent = `Value: ${value}`;
    }
}


function clearAll() {
    keyInput.value = '';
    valueInput.value = '';
    h1.textContent = '';
    h2.textContent = '';
}


function clearKeyValue() {
    h1.textContent = '';
    h2.textContent = '';
}


addButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    addKeyValue();
});

clearButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    clearAll();
});

udalitButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    clearKeyValue();
});
