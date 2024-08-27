// scripts.js
function toggleContent() {
    const chistes = document.getElementById('chistes');
    const poemas = document.getElementById('poemas');
    const button = document.querySelector('button');

    if (chistes.style.display === 'none') {
        chistes.style.display = 'block';
        poemas.style.display = 'none';
        button.textContent = 'Mostrar Poemas';
    } else {
        chistes.style.display = 'none';
        poemas.style.display = 'block';
        button.textContent = 'Mostrar Chistes';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
