const swiper = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: ".pagination1",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
});
const swiper2 = new Swiper(".mysilder", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
    breakpoints: {
        // when window width is >= 320px
        120: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        420: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        580: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1040: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1440: {
            slidesPerView: 4,
          spaceBetween: 40
        }
      }
});
let urlParam = new URLSearchParams(window.location.search);
let id = urlParam.get('id');
if (id) {
    console.log(id);
    let tabs = document.querySelectorAll('.tab');
    let tabContents = document.querySelectorAll('.tab-pane');
    let tabTarget = document.querySelector(`.tab[data-bs-target = '#${id}']`);
    let tabContentTarget = document.querySelector(`#${id}`);
    console.log(tabTarget);
    console.log(tabContentTarget);
    tabs.forEach((tabElm)=>{
        if (tabElm === tabTarget) {
            tabElm.classList.add('active');
        } else {
            tabElm.classList.remove('active');
        }
    });
    tabContents.forEach((tabContentElm)=>{
        if (tabContentElm === tabContentTarget) {
            tabContentElm.classList.add('active');
            tabContentElm.classList.add('show');
        } else {
            tabContentElm.classList.remove('active');
            tabContentElm.classList.remove('show');
        }
    });
}