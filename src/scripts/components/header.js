document.querySelector('.header__top-burger')?.addEventListener('click', () => {
    document.querySelector('.header__bottom').classList.toggle('active');
    document.querySelector('.header__logo-wrapper').classList.toggle('header__logo-wrapper_white');
    document.querySelector('body').classList.toggle('lock');
});

document.querySelector('.header__bottom-close')?.addEventListener('click', () => {
    document.querySelector('.header__bottom').classList.remove('active');
    document.querySelector('.header__logo-wrapper').classList.remove('header__logo-wrapper_white');
    document.querySelector('body').classList.remove('lock');
});

if(window.matchMedia('(max-width: 768px)').matches) {
    window.addEventListener("scroll", () => {
        if (document.querySelector(".header")) {
            if (pageYOffset <= document.querySelector(".header").offsetHeight) {
                document.querySelector(".header").classList.remove("active");
            } else {
                document.querySelector(".header").classList.add("active");
            }
        }
    });

    if(document.querySelector('.header__bottom')) {
        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.header__bottom') && !target.closest('.header__top-burger')) { 
                document.querySelector('.header__bottom').classList.remove('active');
                document.querySelector('.header__logo-wrapper').classList.remove('header__logo-wrapper_white');
            }
        });
    }


    document.querySelectorAll('.header__list li')?.forEach((li) => {
        li.addEventListener('click', () => {
            let checkActive = li.querySelector('.dropdown-menu').classList.contains('active');

            document.querySelectorAll('.header__list li').forEach((li) => {
                li.querySelector('.dropdown-menu')?.classList.remove('active');
                li.querySelector('.dropdown-item')?.classList.remove('active');
            });

            if(!checkActive) {
                li.querySelector('.dropdown-menu').classList.add('active');
                li.querySelector('.dropdown-item').classList.add('active');
            }
        });
    }); 
}