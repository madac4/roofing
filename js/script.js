$(document).ready(function () {
  
  // BURGER
  $('.burger_menu').click(function () {
    $('.burger_menu, .nav_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  // BURGER

  // SUBMENU
  $('.menu-item-has-children').click(function () {
    $('.menu-item-has-children , .submenu').toggleClass('active');
  });
  // SUBMENU

// MAIN SLIDER
  var $status = $('.paging_info');
  var $slickElement = $('.slider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
  });

  $slickElement.slick({
    dots: true,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.prev_slide'),
    nextArrow: $('.next_slide'),
    appendDots: $('.dots_list'),
  });
// MAIN SLIDER


  // REVIEW SLIDER
$('.review_slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.review_prev'),
    nextArrow: $('.review_next'),
  });
  // REVIEW SLIDER
  

  // PRODUCT SLIDER
$('.products_slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.product_prev'),
    nextArrow: $('.product_next'),
    centerMode: true,
    slidesToShow: 4,
    centerPadding: '10px',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '100px',

        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        }
      },
    ]
  });

  // GALLERY POPUP
  $('.popup_item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('div');
			}
		}
		
	});
  // GALLERY POPUP
});




  // PORTFOLIO SLIDER
  $('.portfolio_slider').slick({
    dots: false,
    arrows: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.portfolio_prev'),
    nextArrow: $('.portfolio_next'),
  });
  // PORTFOLIO SLIDER
  
// ADAPTIV
$(window).resize(function() {
  adaptive_function();
});

function adaptive_header(w,h) {
  var headerMenu = $('.nav_menu');
  var headerContact = $('.header_contact');
  
  if (w<550) {
      if (!headerContact.hasClass('done')) {
          headerContact.addClass('done').appendTo(headerMenu);
      }
  }else{
      if (headerContact.hasClass('done')) {
          headerContact.removeClass('done').appendTo($('.header_body'));
      }
  }

}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w,h);
}
  adaptive_function();
// ADAPTIV

  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }