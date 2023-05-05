const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

const mediaQuery = window.matchMedia('(min-width: 1000px)')

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })


    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })

    menu.querySelectorAll('.menu__link__btn').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

function handleTabletChange(e) {
    if (e.matches) {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('lock')
    }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


//Свайперы

const mainSwiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 800,
    loop: false,
    freeMode: true,
    mousewheel: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 500,
    loop: false,
    freeMode: true,
    mousewheel: true,
    slidesPerView: 2,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


const contactsSwiper = new Swiper('.contacts-swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 800,
    loop: false,
    freeMode: true,
    mousewheel: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const helloSwiper = new Swiper('.hello-swiper', {
    // Optional parameters
    direction: 'vertical',
    speed: 800,
    loop: false,
    freeMode: true,
    mousewheel: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//Звёздочки
function init() {

    //estrelas

    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
            + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: "
            + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;

}

window.onload = init;