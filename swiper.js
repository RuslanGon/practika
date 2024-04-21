// const swiper = new Swiper('.image-slider', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

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
   }

  

 });
