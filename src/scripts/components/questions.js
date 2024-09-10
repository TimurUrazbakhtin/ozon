const slideDown = elem => elem.style.height = `${elem.scrollHeight}px`;

document.querySelectorAll('.questions__elem')?.forEach((question) => {
    question.addEventListener('click', () => {
        let checkActive = question.classList.contains('active');

        document.querySelectorAll('.questions__elem')?.forEach((question) => {
            question.classList.remove('active');
            question.querySelector('.questions__elem-body').removeAttribute('style');
        });

        if(!checkActive) {
            question.classList.add('active');
            slideDown(question.querySelector('.questions__elem-body'));
        }
    });
});