$(document).ready(function() {
  $("h1")
    .hide()
    .fadeIn(2500);
  $("p")
    .hide()
    .fadeIn(4000);
});

$(document).ready(function() {
  $("#navbar").animate({ top: "0px" }, 800);
});

function mobileMenu() {
  var x = document.getElementById("navcontents");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("navbar").style.display = "block";
  } else {
    x.className = "topnav";
    document.getElementById("navbar").style.display = "none";
  }
}

//Mobile link clicked -> close menu
$(document).ready(function() {
  $("li").on("click", function() {
    if (document.getElementById("navcontents").className != "topnav") {
      document.getElementById("navcontents").className = "topnav";
      document.getElementById("navbar").style.display = "none";
    }
  });
});

$(window).on("resize", function(event) {
  var windowSize = $(window).width(); // Could've done $(this).width()
  if (windowSize > 600) {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navcontents").className = "topnav";
    $("li a").css("color", "#FFF");
  } else if (windowSize <= 600) {
    document.getElementById("navbar").style.display = "none";
  }
});

//Set menu colours (based on screen position)
$(window).scroll(function() {
  if (
    $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
    $(window).width() > 600
  ) {
    console.log('Im changing color');
    $("li a").css("color", "#5C5757");
  } else {
    $("li a").css("color", "#FFF");
  }
});

//Set menu hover colours
$(document).ready(function() {
  $("li a").hover(
    function() {
      if (
        $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
        $(window).width() > 600
      ) {
        $(this).css("color", "#464646");
      } else {
        $(this).css("color", "#BACEE0");
      }
    },
    function() {
      if (
        $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
        $(window).width() > 600
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
