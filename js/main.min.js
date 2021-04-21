// ********** SWIPER ****************
// в html добавляем встроенные классы swiper
// swiper-container, swiper-wrapper, swiper-slide swiper-pagination, swiper-button-prev(next), swiper-scrollbar
var slider = new Swiper('.block-08__slider-container', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,

   breakpoints: {
         // when window width is >= 375
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 768
    768: {
    slidesPerView: 2,
    spaceBetween: 40
    },
    // when window width is >= 1150px
    1150: {
      slidesPerView: 3,
      spaceBetween: 60
    },
  },
   navigation: {
     prevEl: '.block-08__slider-prev',
     nextEl: '.block-08__slider-next',
   }
 })
// ********** END SWIPER ****************

const qs = selector => document.querySelector(selector),
      qsAll = selector => document.querySelectorAll(selector);

const burger = qs('.header__burger'),
      menu = qs('.header__bottom-menu'),
      phone = qs('.header__top-phone'),
      headerBtn = qs('.header__bottom-btn'),
      headerAdress = qs('.header__top-adress'),
      bottomMenu = qs('.header__bottom-menu'),
      headerTop = qs('.header__top'),
      mediaQuery = window.matchMedia('(max-width: 991px)');

// === БУРГЕР ===
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('show')
  qs('body').classList.toggle('fixed')  //стабилизация моб.меню

    if (menu.classList.contains('show')) {
      phone.classList.add('menu')
      bottomMenu.appendChild(phone) //телефон в бургер меню

      headerBtn.classList.add('menu')
      bottomMenu.appendChild(headerBtn) //кнопка в бургер меню

      headerAdress.classList.add('menu')
      bottomMenu.appendChild(headerAdress)
    } else {
      burger.before(phone)

      phone.classList.remove('menu')
      headerBtn.classList.remove('menu')
      headerAdress.classList.remove('menu')
    }
})

// прекидываем ЭЕЛЕМЕНТЫ
function mediaChange(e) {
  if (e.matches) {
      //если меньше 768
    burger.before(phone)  //телефон посередине меню
  } else {
    headerTop.appendChild(phone)  //телефон посередине меню
  }
}
mediaQuery.addListener(mediaChange)
mediaChange(mediaQuery) 

// кнопка СМОТРЕТЬ ВСЕ ТОВАРЫ
const seeAllProd = document.querySelector('.block-03__btn');
const hiddenProd = document.querySelectorAll('.block-03__item.block-03__item-hidden');
let btnVal = seeAllProd.innerHTML;

seeAllProd.addEventListener('click', () => {
  hiddenProd.forEach(item => {
    item.classList.toggle('show');
    if (item.classList.contains('show')) {
      seeAllProd.innerHTML = "Скрыть лишние";
    } else {
       seeAllProd.innerHTML = btnVal;
    }
  })
})

// const block08 = document.querySelector('.block-08__slider');
// block08.addEventListener('click', e => {
//   let val = e.target;

//   if (val.parentNode.classList.contains('block-08__slide')) {
//     console.log(val.parentNode)
//   }
// })


// HYSTMODAL ********** 
// modal make call
const makeCall = new HystModal({
  linkAttributeName: "data-hystmodal" 
})
const modalAnswer = new HystModal({
  linkAttributeName: "data-hystmodal" 
})


// make call btn
const modalCallBtn = document.querySelector('.modal-btn');
const modalName = document.querySelector('.modal-input.modal-input-name');
const modalPhone = document.querySelector('.modal-input.modal-input-phone');
const modalError = document.querySelector('.modal-error');

modalName.addEventListener('click', () => {
  modalError.innerHTML = "";
})
modalPhone.addEventListener('click', () => {
  modalError.innerHTML = "";
})

modalCallBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (modalName.value.length <= 2) {
    modalError.innerHTML = "Имя не короче двух символов";
  } else if (!modalPhone.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
    modalError.innerHTML = "Введите правильный телефон";
  } else {
    modalAnswer.open('#answer');
  }
})