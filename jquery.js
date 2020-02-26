let skillsMoveTriggered = 0;

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
    setMenuColor();
  } else {
    x.className = "topnav";
    $("#navbar").animate({"left": "100vw"}, 300);
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
  if (windowSize > 600) {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navcontents").className = "topnav";
    setMenuColor();
    $("#navbar").css("left", "4vw");
  } else if (windowSize <= 600) {
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
    $(window).width() > 600
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

//Stars video speed
$(document.getElementById("stars-video")).ready(function() {
  document.getElementById("stars-video").playbackRate = 0.5;
});



//On screen load (Skills text)
$(window).scroll(function() {
  if(!skillsMoveTriggered){
  var top_of_element = $("#skills-container").offset().top;
  var bottom_of_element = $("#skills-container").offset().top + $("#skills-container").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
console.log('Is visible');



  console.log(skillsMoveTriggered);
  $("#skills-left").animate({"margin-left": "4vw"}, 2000);
  skillsMoveTriggered = 1;
  console.log('Skills Move Triggered');
}

  } /*else {
    console.log('Is not visible');
$("#skills-left").animate({"margin-left": "-40vw"}, 2000);
  }*/
});

