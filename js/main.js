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
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
    });

    //BUTTON TO TOP
    function buttonToTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
    }

    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    $('#scrollLinkHome').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    $('#scrollLinkHome1').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });


    /*
     //FILL ELEMENTS DEPENDS OF CATEGORY
     $('[data-category]').each(function () {
     var color = $(this).data('category');
     $(this).find('.category-bg').css('background', color);
     $(this).find('.category-border').css('border-color', color);
     $(this).find('.category-color').css('color', color);
     });
     */

    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


    //ANIMATION 

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight-60) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }

    buttonToTop();
    animateHeader();
    animation();

    $(window).scroll(function () {
        buttonToTop();
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
            responsive: {
                0: {
                    nav: false
                },
                576: {
                    nav: true,
                    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
                }
            }
        });//end lead-slider


        //partners-slider
        $('.partners-slider').owlCarousel({
            items: 4,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
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


    //CONTACT FORM
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {

                name: {
                    required: true
                },

                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }


            },
            messages: {
                name: {
                    required: 'The *Name field is required'
                },

                email: {
                    required: 'The *Email field is required',
                    email: 'Please enter a valid Email address!'
                },
                message: {
                    required: 'The *Message field is required'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });







});//end document.ready


