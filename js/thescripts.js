

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
            arrows: false,
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
        $('#read-more').click(function(){
            $('body').addClass('normal');
        })
  
    }
    
    function addScrollClass() {
        $('.icon-container, #campaign-scroll, #contact-scroll, #events-scroll, #resources-scroll').click (function() {
            $('html, body').animate({scrollTop: $('.search-section').offset().top }, 'slow');
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



 
 /*-------------------------------- Functions Ends --------------------------------*/
 

    function navInit() {
        $('#nav-toggle').click(function () {
            $('body').toggleClass('open-menu');
        });

        var scrollTop = 0;
        jQuery(window).scroll(function(){
            scrollTop = jQuery(window).scrollTop();
            jQuery('.counter').html(scrollTop);
            if (scrollTop >= 150) {
                jQuery('#header-wrapper').addClass('nav-scroll');
            } else if (scrollTop < 150) {
                jQuery('#header-wrapper').removeClass('nav-scroll');
            }
        });

    }

    jQuery(window).scroll(function () {
        var winHeight = jQuery(window).height();
        var offset = 0.6;
        var scrollTop = jQuery(window).scrollTop();
        var visibleArea = scrollTop + (winHeight * offset);
    
        jQuery('.animation-area').each(function () {
            if(jQuery(this).offset().top < visibleArea) {
                jQuery(this).find('.ani-sequence').addClass('normal');
            }else{
                jQuery(this).find('.ani-sequence').removeClass('normal');
            }
        });
    
    });

    jQuery(window).scroll(function () {
        var winHeight = jQuery(window).height();
        var offset = 0.6;
        var scrollTop = jQuery(window).scrollTop();
        var visibleArea = scrollTop + (winHeight * offset);
    
        jQuery('.animation-area1').each(function () {
            if(jQuery(this).offset().top < visibleArea) {
                jQuery(this).find('.ani-sequence').addClass('lefting'); 
                
   
            }else{
                jQuery(this).find('.ani-sequence').removeClass('lefting');
               
            }
        });
    
    });

    jQuery(window).scroll(function () {
        var winHeight = jQuery(window).height();
        var offset = 0.6;
        var scrollTop = jQuery(window).scrollTop();
        var visibleArea = scrollTop + (winHeight * offset);
    
        jQuery('.animation-area2').each(function () {
            if(jQuery(this).offset().top < visibleArea) {
               
                jQuery(this).find('.ani-sequence').addClass('righting');
   
            }else{
               
                jQuery(this).find('.ani-sequence').removeClass('righting');
            }
        });
    
    });

    jQuery(window).scroll(function () {
        var winHeight = jQuery(window).height();
        var offset = 0.6;
        var scrollTop = jQuery(window).scrollTop();
        var visibleArea = scrollTop + (winHeight * offset);
    
        jQuery('.animation-area3').each(function () {
            if(jQuery(this).offset().top < visibleArea) {
               
                jQuery(this).find('.ani-sequence').addClass('normal');
   
            }else{
               
                jQuery(this).find('.ani-sequence').removeClass('normal');
            }
        });
    
    });

    jQuery(window).scroll(function () {
        var winHeight = jQuery(window).height();
        var offset = 0.6;
        var scrollTop = jQuery(window).scrollTop();
        var visibleArea = scrollTop + (winHeight * offset);
    
        jQuery('.animation-area4').each(function () {
            if(jQuery(this).offset().top < visibleArea) {
               
                jQuery(this).find('.ani-sequence').addClass('normal');
   
            }else{
               
                jQuery(this).find('.ani-sequence').removeClass('normal');
            }
        });
    
    });

    


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
    
    

   



