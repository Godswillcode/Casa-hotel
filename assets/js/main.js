
!(function($) {
  "use strict";

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
})(jQuery);


// Navbar background on scroll
const header = document.querySelector('.header');
window.onscroll = function() {
   var top = window.scrollY;
   if (top >= 100){
    header.classList.add('active')
   }else {
    header.classList.remove('active');
   } 
}


// Pop up Modal
$(window).on('load', function(){
  setTimeout(function(){
      $('#myModal').modal('show')
  }, 10000);
  });


 // Back to top button
 const toTop = document.querySelector(".to-top");
 window.addEventListener('scroll', () => {
   if (window.pageYOffset > 100) {
       toTop.classList.add("active");
   } else {
      toTop.classList.remove("active"); 
   } 
 })


 // Preloader
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});


// Animation on scroll
$(window).on('load', function() {
  AOS.init({
    duration: 1000,
    once: false
  });
});


 // jQuery counterUp
 $('[data-toggle="counter-up"]').counterUp({
  delay: 50,
  time: 2000
});


// Initiate venobox (lightbox feature used in vacation)
$(document).ready(function() {
  $('.venobox').venobox({
    'share': false
  });
});


// owl carousel
$('.testimonial-carousel').owlCarousel({
  loop:true,
  margin:20,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

 // Footer copyright
 var year = new Date().getFullYear();
 document.getElementById('copyright').innerHTML = year;

