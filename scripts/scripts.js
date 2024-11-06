document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapperFirst = document.querySelector('.slider1');
  const splide1 = new Splide(sliderWrapperFirst, {
    mediaQuery: 'min',
    breakpoints: {
      768: {
        destroy: true,
      },
    }
  });
  splide1.mount();
});
