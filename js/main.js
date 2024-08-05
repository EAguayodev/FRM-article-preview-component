const shareButton = document.querySelector('#share__img');
const shareBox = document.querySelector('#share__box');

shareButton.addEventListener('click', () => {
    shareBox.classList.toggle('hidden');
});