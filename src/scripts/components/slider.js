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