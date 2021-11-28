$(document).ready(function() {
  // intializing aos 
  AOS.init({
    delay:400,
    duration:1000
  })
  // Start work gallery
	$('#Grid').mixitup();

  //Start light slideshow
  $("#lightSlider").lightSlider({
    item: 4,
    slideMove: 1,
    slideMargin: 10,
    mode: "slide",
    cssEasing: 'ease', 
    easing: 'linear', 
    speed: 400, //ms'
    auto: true,
    loop: true,
    responsive: [
      {
        breakpoint:960,
        settings: {
            item:3,
            slideMove:1,
          }
      },
      {
        breakpoint:768,
        settings: {
            item:2,
            slideMove:1,
          }
      },
      {
        breakpoint:480,
        settings: {
            item:1,
            slideMove:1,
          }
      },
    ]
});



  // prettyPhoto script start here
  $('a[data-gal]').each(function() {
    $(this).attr('rel', $(this).data('gal'));
  });     
  $("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

  $('#menu-bar').click(function() {
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  })

  //before-after-slider
  $('.slider').on('input change', (e) => {
    const sliderPos = e.target.value;
    $('.after').css('width', `${sliderPos}%`);
    $('.slider-button').css('left', `calc(${sliderPos}% - 15px)`);

  })

  $(window).on('scroll load', function() {
    $('#menu-bar').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');
    if($(window).scrollTop() > $('#about').offset().top - 50 ) {
      $('.scroll-btn').css('transform', 'translateY(0px)');
      $('header').addClass('dark-bg');
    }
    if($(window).scrollTop() <= $('#about').offset().top - 50) {
      $('.scroll-btn').css('transform', 'translateY(200px)');
      $('header').removeClass('dark-bg');
    }

    //scroll spy 
    $('section').each(function() {

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let height = $(this).height();
      let id = $(this).attr('id');

      if(top > offset && top < offset + height) {
        $('.nav ul li a').removeClass('active');
        $('.nav').find(`[href="#${id}"]`).addClass('active');
      }

    })
  });

  $('.menu .list .btn').click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');
    $('#menu-img').attr('src', src);
  });

});

