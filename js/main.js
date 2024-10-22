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
const galleryGlightbox = GLightbox({
    selector: '.gallery-glightbox'
});

const videoGlightbox = GLightbox({
    selector: '.video-glightbox'
});
const photoGallerySlider = new Swiper('.photo-gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.photo-gallery-button-next',
        prevEl: '.photo-gallery-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2  
        },
        992: {
          slidesPerView: 3
        }
    } 
});

const videoGallerySlider = new Swiper('.video-gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoHeight: true
});

const partnersSlider = new Swiper('.partners-slider', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    speed: 4000,
    autoplay: {
        delay: 1,
    },
    allowTouchMove: false,
    breakpoints: {
        576: {
            slidesPerView: 3  
        },
        768: {
          slidesPerView: 4
        }
    } 
});

const productsSlider = new Swiper(".products-slider", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        576: {
            slidesPerView: 3  
        },
        768: {
          slidesPerView: 4
        }
    } 
});

const productsFullSlider = new Swiper(".products-full-slider", {
    spaceBetween: 10,
    effect: "fade",
    navigation: {
        nextEl: ".products-detail__left-slider-button-next",
        prevEl: ".products-detail__left-slider-button-prev",
    },
    thumbs: {
        swiper: productsSlider,
    },
});
document.querySelector('.products-list__section-button')?.addEventListener('click', () => {
    document.querySelector('.products-list__section-button').classList.toggle('active');
    document.querySelector('.products-list__section-wrapper').classList.toggle('active');
});
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
document.querySelectorAll('[tab]')?.forEach(tab => {
    tab.addEventListener('click', (event) => {
        document.querySelectorAll(`[tab="${tab.getAttribute('tab')}"]`).forEach(allTab => {
            allTab.classList.remove('active');
        });
        document.querySelectorAll(`[tab-content="${tab.getAttribute('tab')}"]`).forEach(allTabContent => {
            allTabContent.classList.remove('active');
        });

        tab.classList.add('active');
        document.querySelector(`[tab-content="${tab.getAttribute('tab')}"]#${tab.id}`).classList.add('active');
    });
});
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
let fields = document.querySelectorAll('.form__file-input');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
	labelVal = label.querySelector('.form__file-text').innerText;
	
	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;
		
		if (countFiles)
			label.querySelector('.form__file-text').innerText = 'Выбрано файлов: ' + countFiles;
		else
		label.querySelector('.form__file-text').innerText = labelVal;
	});
});
if(document.querySelector('.mask-phone')) {
  Inputmask({"mask": "+7 (999) 999-99-99"}).mask(document.querySelector('.mask-phone'));
}
if(document.querySelector('.mask-date')) {
  Inputmask({"mask": "99.99.9999"}).mask(document.querySelector('.mask-date'));
}