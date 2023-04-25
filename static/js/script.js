$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

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


$(document).ready(function () {
    $(".center").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25vw',
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000,
        easing: 'easeInOutSine',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    // centerPadding: '15vw',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    // centerPadding: '10vw',
                }
            }
        ]
    });
});

//Анимация текста


//плавное скрытие хидера

$(document).ready(() => { // DOM готов к взаимодейтсвию

    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

        const header = $('.header') // находим header и записываем в константу

        let prevScroll = $(window).scrollTop() // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

        $(window).scroll(() => { // при прокрутке страницы

            currentScroll = $(window).scrollTop() // узнаем на сколько прокрутили страницу

            const headerHidden = () => header.hasClass('header_hidden') // узнаем скрыт header или нет

            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.addClass('header_hidden') // то скрываем header
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.removeClass('header_hidden') // то отображаем header
            }

            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

        })

    }

    onScrollHeader() // вызываем основную функцию onScrollHeader

})

//Анимация интро

let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')
window.addEventListener('DOMContentLoaded', () => {
    $('body').addClass('stop-scrolling')
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);

        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);
        setTimeout(() => {
            intro.style.top = '-100vh';
            $('body').removeClass('stop-scrolling')

        }, 2800);
    })
})

//Шум на фон?
var StickyElement = function (node) {
    var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.sticky-content');
    var onScroll = function (e) {
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;
        if (docTop > anchorTop) {
            if (!fixed) {
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        } else {
            if (fixed) {
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
};
var sticky = new StickyElement($('.sticky-element'));

//Отключение прокрутки
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

setTimeout(disableScroll, 0)

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

setTimeout(enableScroll, 3100)
