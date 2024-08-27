document.addEventListener('DOMContentLoaded', () => {
    const showLetterButton = document.getElementById('showLetterButton');
    const closeLetterButton = document.getElementById('closeLetterButton');
    const redirectButton = document.getElementById('redirectButton');
    const letterContainer = document.getElementById('letterContainer');

    showLetterButton.addEventListener('click', () => {
        letterContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when letter is open
    });

    closeLetterButton.addEventListener('click', () => {
        letterContainer.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    redirectButton.addEventListener('click', () => {
        window.location.href = 'pagina/index.html'; // Redirige a la página local
    });
});
