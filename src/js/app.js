import * as flsFunction from "./modules/function.js";

flsFunction.isWebp();
flsFunction.calcWidthScroll();
flsFunction.mask();
// flsFunction.openHeaderCallback();
// flsFunction.rangeSlider();
// flsFunction.tabs();
// flsFunction.showMoreBlocks();
// flsFunction.calc();
// flsFunction.playVideo();
// flsFunction.accordion();
// flsFunction.scrollButtons();
// flsFunction.openModal();

let im = new Inputmask({
    mask: '8 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
});
// document.querySelectorAll('.masked').forEach(input => {
//     im.mask(input);
// })


import Swiper, { FreeMode, Navigation, Scrollbar, Pagination, Autoplay, EffectCreative, Thumbs } from 'swiper';

// document.addEventListener('DOMContentLoaded', function() {
//     function hasTouchDevice() {
//       return !!('ontouchstart' in window || navigator.maxTouchPoints);
//     }
//     if (!hasTouchDevice()) {
//       const toUp = document.querySelectorAll('.calc__card-countwr a');
//       toUp.forEach(link => {
//         link.classList.add('hover');
//         link.onmouseenter = function(){
//             link.classList.add('hover');
//           }
//         link.onmouseleave = function() {
//             link.classList.remove('hover');
//         }
//       })
      
//     }
//   });

// var swiper = new Swiper(".about-thumb", {
//     modules: [FreeMode],
//     // loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     // freeMode: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 3,
//         },
//         606: {
//             slidesPerView: 4,
//         }
//     }
// });

