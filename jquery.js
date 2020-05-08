$(document).ready(function () {
  //About section 3D background

  VANTA.NET({
    el: "#about",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xb6b6b6,
    backgroundColor: 0xffffff,
    points: 7,
  });

  // Slider
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 9,
    arrows: true,
    fade: false,
    adaptiveHeight: false,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
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
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
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

//Mobile link clicked -> close menu
$("li").on("click", function () {
  if (document.getElementById("navcontents").className != "topnav") {
    document.getElementById("navcontents").className = "topnav";
    $("#navbar").css("left", "100vw");
  }
});

//Mobile menu clicked
function mobileMenu() {
  var x = document.getElementById("navcontents");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("navbar").style.display = "block";
    $("#navbar").animate({ left: "0vw" }, 300);
    $("#navcontents").css("opacity", "1");
    $("#navbar").css("opacity", "1");
    //setMenuColor();
  } else {
    x.className = "topnav";
    $("#navbar").animate({ left: "100vw" }, 300);
    $("body").css({ position: "static", overflow: "auto" });
  }

  //Change Menu style on resize
$(window).on("resize", function(event) {
  var windowSize = $(window).width(); // Could've done $(this).width()
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
