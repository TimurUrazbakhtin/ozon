document.querySelectorAll('.popup-close')?.forEach((button) => {
    button.addEventListener('click', (el) => {
        document.querySelector('.popup#' + button.id).classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    });
});

document.querySelectorAll('.popup-open')?.forEach((button) => {
    button.addEventListener('click', (el) => {
        let popup = document.querySelector('.popup#' + button.id);
        popup.querySelector('.popup__info-title').innerHTML = button.getAttribute('data-title');
        popup.querySelector('.popup__info-subtitle').innerHTML = button.getAttribute('data-subtitle');

        if (button.id === 'products') 
        popup.querySelector('.popup__info-img img').setAttribute('src', button.getAttribute('data-img'));

        document.querySelector('.popup#' + button.id).classList.add('active');
        document.querySelector('body').classList.add('lock');
    });
});

if(document.querySelector('.popup__content')) {
    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.popup__content') && !target.closest('.popup-open')) { 
            document.querySelector('.popup').classList.remove('active');
            document.querySelector('body').classList.remove('lock');
        }
    });
}