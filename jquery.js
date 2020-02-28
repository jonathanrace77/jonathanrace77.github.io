//Fade in text in welcome section
$(document).ready(function() {
  $("h1").animate({"opacity": "1"}, 2000);
  $("p").animate({"opacity": "1"}, 3000);
});

$(document).ready(function() {
  $("#navbar").animate({ top: "0px" }, 3000);
});

function mobileMenu() {
  var x = document.getElementById("navcontents");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("navbar").style.display = "block";
    $("#navbar").animate({"left": "50vw"}, 300);
    $("#navcontents").css("opacity", "1");
    $("#navbar").css("opacity", "0.9");
    $("body").css({"position": "sticky", "overflow": "hidden"});
    setMenuColor();
  } else {
    x.className = "topnav";
    $("#navbar").animate({"left": "100vw"}, 300);
    $("body").css({"position": "static", "overflow": "auto"});

  }
}

//Mobile link clicked -> close menu
$(document).ready(function() {
  $("li").on("click", function() {
    if (document.getElementById("navcontents").className != "topnav") {
      document.getElementById("navcontents").className = "topnav";
      $("#navbar").css("left", "100vw");
      //document.getElementById("navbar").style.display = "none";
    }
  });
});

$(window).on("resize", function(event) {
  var windowSize = $(window).width(); // Could've done $(this).width()
  if (windowSize > 800) {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navcontents").className = "topnav";
    setMenuColor();
    $("#navbar").css("left", "4vw");
  } else if (windowSize <= 800) {
    document.getElementById("navbar").style.display = "none";
    $("#navbar").css("left", "100vw");
  }
});

//Set menu colours (based on screen position)
$(window).scroll(function() {
  setMenuColor();
});

let setMenuColor = () => {
  if (
    $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
    $(window).width() > 800
  ) {
    $("li a").css("color", "#5C5757");
  } else {
    $("li a").css("color", "#FFF");
  }
}

//Set menu hover colours
$(document).ready(function() {
  $("li a").hover(
    function() {
      if (
        $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
        $(window).width() > 800
      ) {
        $(this).css("color", "#464646");
      } else {
        $(this).css("color", "#BACEE0");
      }
    },
    function() {
      if (
        $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
        $(window).width() > 800
      ) {
        $(this).css("color", "#464646");
      } else {
        $(this).css("color", "#FFF");
      }
    }
  );
});

//Bouncing arrow icon
$("img").hover(
  function() {
    $(this).data("bounce", true);
    bounce($(this));
  },
  function() {
    $(this).data("bounce", false);
  }
);

function bounce($elem) {
  $elem.effect("bounce", { times: 1, distance: 10 }, 500, function() {
    if ($(this).data("bounce")) bounce($elem);
    else $elem.stop();
  });
}

//Stars video speed
$(document.getElementById("stars-video")).ready(function() {
  document.getElementById("stars-video").playbackRate = 0.5;
});





//On screen load (Skills text)
$(window).on('scroll',function() {
  var hT = $('#skills-left').offset().top,
      hH = $('#skills-left').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

  if (wS > ((hT+hH-wH)-500)){
      $(window).off('scroll');
      skillsLeftMove();      
  }
});

let skillsLeftMove = () => {
  $("#skills-left").animate({"margin-left": "4vw"}, 1000);
}