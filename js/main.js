$(document).ready(function () {
    
    //Header animation
    function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active py-1 py-lg-2').removeClass('py-2 py-lg-4');
        } else {
            $('header').removeClass('header-active py-1 py-lg-2').addClass('py-2 py-lg-4');
        }
    }
    
    //animate toogler
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('active');
    });
    
    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color );
    });
    
    
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animateHeader();
    animation();

    $(window).scroll(function () {
        animateHeader();
        animation();
    });
    
    
    //OWL CAROUSEL START HERE
    if ($('.owl-carousel').length > 0) {

        $('.lead-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            nav:true,
            navText:['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
        });//end lead-slider
        
        
        //partners-slider
        $('.partners-slider').owlCarousel({
            items: 4,
            dots:true,
            loop:true,
            responsive: {
                0: {
                    items: 1
                },
                450:{
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                576: {
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                992: {
                    items: 4,
                    margin: 30,
                    slideBy: 4
                }
            }  
        });//end partners-slider
    }
    
    //TOOLTIP
     $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });







});//end document.ready


