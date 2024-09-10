document.querySelector('.products-list__section-button')?.addEventListener('click', () => {
    document.querySelector('.products-list__section-button').classList.toggle('active');
    document.querySelector('.products-list__section-wrapper').classList.toggle('active');
});