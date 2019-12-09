jQuery(document).ready(function($) {
  $('.bánGạch').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
     breakpoint: 400,
     settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
});