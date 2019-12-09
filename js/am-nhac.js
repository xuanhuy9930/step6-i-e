jQuery(document).ready(function($) {
    $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  centerMode: true,
  focusOnSelect: true,
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