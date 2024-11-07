document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapperFirst = document.querySelector('.slider1');
  const sliderWrapperSecond = document.querySelector('.slider2');

  const splide1 = new Splide(sliderWrapperFirst, {
    mediaQuery: 'min',
    perPage: 1,
    pagination:false,
    arrows:false,
    autoWidth:true,
    breakpoints: {
      768: {
        destroy: true,
      },
    }
  });
  splide1.mount();

  const splide2 = new Splide(sliderWrapperSecond, {
    type: 'loop',
    speed: 600,
    pagination:false,
    arrows:false,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        gap: 30,
        perPage: 1,
      },
      1024: {
        gap: 30,
        perPage: 3,
      },
    
    }
  });
  splide2.mount();
});
