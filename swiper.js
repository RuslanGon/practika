new Swiper(".swiper-container", {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
     renderBullet: function (index, className) {
       return '<span class="' + className + '">' + (index + 1) + "</span>";
     },

     //    type: 'fraction',
     //    renderFraction: function(currentClass, totalClass) {
     //     return ' foto <span class="' + currentClass + '"></span> for <span class="' + totalClass + '"></span>';
     // },

    //  type: 'progressbar',

   },
   scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
   },
  //  (чтоб не перетаскивать мышкой )
   simulateTouch: false,
  //  (меняется курсор при наведении на картинку )
   grabCursor: true,
   //  (переключение при клике на картинку)
   slideToClickedSlide: true,

   hasNavigation: {
    watchState: true,
   },

  //  переключаа\е фотки с помощью клавиатуры
   keyboard: {
    enabled: true,
    onlyInViewport:true,
    pageUpDown: true
   },
   //  переключаа\е фотки с помощью мышки
   mousewheel: {
    sensitivity :1
   },

   //  автовысота картинок
   autoHeight: true,

   //  количество слайдов для показа
  //  slidesPerView: 2,

   //  расстояние между слайдами
   spaceBetween: 15,

    //  околичество пролистуемых слайдов работает вместе с slidesPerView: 2,
    // slidesPerGroup: 2,

    //  бесконечная прокрутка
    // loop: true,

     //  свободный режим
     freeMode: true,

      //  автопрокрутка
      // autoplay: {
      //   delay: 1000,
      //   stopOnLastSlide: true,
      //   disableOnInteraction: false,
      // },

       //  скорость 
      //  speed: 1000,

        //  вертикальный скрол
      // direction: 'vertical',

      //  эфект переклчения слайдов

      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },

      // effect: 'flip',
      // flipEffect: {
      //   slideShadows: true,
      //   limitRotation: true
      // },

      // effect: 'cube',
      // fadeEffect: {
      //   slideShadows: true,
      //   shadow: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94
      // },

      // дополнение к coverflow

      // effect: 'coverflow',
      // coverflowEffect: {
      //   ritate: 20,
      //   stretch: 50,
      //   slideShadows: true,
      // },

       // для адаптива параметры 3 точки преломления

       breakpoints: {
        320: {
          slidesPevView: 1
        },
        480: {
          slidesPevView: 2,
        },
        992: {
          slidesPevView: 3,
        }
       },

 });
