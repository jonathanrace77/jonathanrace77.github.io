$(document).ready(function () {
  // Slider
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      focusOnSelect: false,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");
    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
});

// Mobile Menu

// Mobile link clicked -> close menu
$("li").on("click", function () {
  if (document.getElementById("navcontents").className != "topnav") {
    document.getElementById("navcontents").className = "topnav";
    $("#navbar").css("left", "100vw");
  }
});

// Mobile menu clicked
function mobileMenu() {
  var x = document.getElementById("navcontents");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("navbar").style.display = "block";
    $("#navbar").animate({ left: "0vw" }, 300);
    $("#navcontents").css("opacity", "1");
    $("#navbar").css("opacity", "1");
    // Disable scroll on mobile menu
    $("body").css("overflow-y", "hidden");
  } else {
    x.className = "topnav";
    $("#navbar").animate({ left: "100vw" }, 300);
    // Enable scroll on mobile menu
    $("body").css("overflow-y", "scroll");
  }

  // Change Menu style on resize
  $(window).on("resize", function (event) {
    var windowSize = $(window).width();
    if (windowSize > 800) {
      document.getElementById("navbar").style.display = "block";
      document.getElementById("navcontents").className = "topnav";
      $("#navbar").css("left", "0vw");
    } else if (windowSize <= 800) {
      document.getElementById("navbar").style.display = "none";
      $("#navbar").css("left", "100vw");
    }
  });
}