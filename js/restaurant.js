// Restaurant
// --> tab-content <-- 
function openBuffet(evt, Name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
// sticky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu-res");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// slick nhận xét khách hàng
jQuery(document).ready(function($) {
  $('.nhan-xet-full').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
// slick bài viết mới
jQuery(document).ready(function($) {
  $('.bai-viet-full').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
// menu-responsive restaurant
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// slide-down menu-rsp
$('.add').each(function(){
  $(this).click(function(event){
    if($(this).hasClass('fa-angle-right')){
      $(this).removeClass('fa-angle-right');
      $(this).addClass('fa-angle-down');
      $(this).siblings('.drop-down-1').slideDown();
    }else{
      $(this).removeClass('fa-angle-down');
      $(this).addClass('fa-angle-right');
      $(this).siblings('.drop-down-1').slideUp();
    }
  })
});
// back-to-top
jQuery(document).ready(function($) {
  $('.ontop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  })
});
// couter up
$(document).scroll(function(){
  if($('html').scrollTop() > $('.thanh-tich').offset().top - 1500){
    console.log('ok1');
    $('.number').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });  
    });
  };
});
