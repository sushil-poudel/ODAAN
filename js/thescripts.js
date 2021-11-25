

 var winWidth = $(window).width();

 $(document).ready(function () {
     sliderInit();
     addClassInit();
     navInit();
     mcustomInit(); 
     addScrollClass();
 });
 
 
 /*------------------------------- Functions Starts -------------------------------*/
 function sliderInit() {
     $('.common-banner-slider').slick({
         arrows: true,
         dots: false,
         autoplay: false,
         speed: 500,
         fade: false,
         pauseOnHover: false,
         cssEase: 'linear',
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [
             {
                 breakpoint: 667,
                 settings: {
                     arrows: true,
                     dots: false
                 }
             }
         ]
     });

     $('.image-slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 500,
        fade: false,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 667,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
 
 
 }
 
 function navInit() {
     $('#nav-toggle').click(function () {
         $('body').toggleClass('open-menu');
     });
 
     $('#overlay').click(function () {
         $('body').removeClass('open-menu');
     })
 }
 
 function addClassInit() {
 
 }
 
 function addScrollClass() {
     $('#home-scroll, #campaign-scroll, #contact-scroll, #events-scroll, #resources-scroll').click (function() {
         $('html, body').animate({scrollTop: $('.common-about-us-section').offset().top }, 'slow');
         return false;
     });
 
     /*$('#campaign-scroll').click (function() {
         $('html, body').animate({scrollTop: $('.common-about-us-section').offset().top }, 'slow');
         return false;
     });
 
     $('#contact-scroll').click (function() {
         $('html, body').animate({scrollTop: $('.common-about-us-section').offset().top }, 'slow');
         return false;
     });
 
     $('#events-scroll').click (function() {
         $('html, body').animate({scrollTop: $('.common-about-us-section').offset().top }, 'slow');
         return false;
     });
 
     $('#resources-scroll').click (function() {
         $('html, body').animate({scrollTop: $('.common-about-us-section').offset().top }, 'slow');
         return false;
     });*/
 }
 
 function mcustomInit() {
     /*$(".your-class").mCustomScrollbar({
         theme:"minimal",
         axis:"x" // horizontal scrollbar
     });*/
 }
  
 function addClassInit() {
     $('.common-select').on('change', function (e) {
         var $optionSelected = $("option:selected", this);
         $('.common-select').children('select').children('option').removeClass('active').removeAttr('aria-expanded');
         $optionSelected.tab('show')
     });
 }
 function addClassInit() {
     $('.common-select').on('change', function (e) {
         var $optionSelected = $("option:selected", this);
         $('.common-select').children('select').children('option').removeClass('active').removeAttr('aria-expanded');
         $optionSelected.tab('show')
     });
 }
 
 /*-------------------------------- Functions Ends --------------------------------*/
 