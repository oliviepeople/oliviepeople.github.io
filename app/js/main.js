//Slider
$('.menu__slider').slick({
    slidesToShow: 4.7,
    slidesToScroll: 2,
    centerMode: true,
    speed: 500,
    draggable: false,
    easing: 'ease-in',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 4,
                centerMode: false
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2.3
            }
        }
    ],  
    prevArrow: '<button type="button" class="slider__btn slider__btn--left"></button>',
    nextArrow: '<button type="button" class="slider__btn slider__btn--right"></button>'
});

$('.delivery__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
})

//Gallery

$('.gallery__list').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
});


//BURGER MENU
const openBtn = document.querySelector('.burger-menu__icon');
const menu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-menu__close');
const body = document.querySelector('body');

function openMenu() {
    menu.classList.add('burger-menu--visible');
    body.classList.add('body--lock');
};

function closeMenu() {
    menu.classList.remove('burger-menu--visible');
    body.classList.remove('body--lock');
};

openBtn.addEventListener('click', () => {
    openMenu();
});

closeBtn.addEventListener('click', () => {
    closeMenu();
});

//POPUP
const popup = document.querySelector('.popup');
const popupOpenBtn1 = document.querySelectorAll('.slider__slide-btn');
const popupOpenBtn2 = document.querySelectorAll('.menu__item-btn');

function openPopup() {
    popup.classList.add('popup--active');
    body.classList.add('body--lock');
};

function closePopup() {
    popup.classList.remove('popup--active');
    body.classList.remove('body--lock');
};

popupOpenBtn1.forEach(btn => btn.addEventListener('click', () => {
    openPopup();
}));

popupOpenBtn2.forEach(btn => btn.addEventListener('click', () => {
    openPopup();
}));

popup.addEventListener('click', (e) => {
    if(e.target === popup) closePopup();
});

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && popup.classList.contains('popup--active')) closePopup();
});