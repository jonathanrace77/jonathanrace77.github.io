//Stars video speed
$(document.getElementById("stars-video")).ready(function() {
  document.getElementById("stars-video").playbackRate = 0.5;
});

//Fade in text in welcome section
$(document).ready(function() {
  $("h1").animate({ opacity: "1" }, 2000);
  $("p").animate({ opacity: "1" }, 3000);
});

//Animate menu bar to slide down
$(document).ready(function() {
  $("#navbar").animate({ top: "0px" }, 3000);
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
    //$("body").css({ position: "sticky", overflow: "hidden" });
    setMenuColor();
  } else {
    x.className = "topnav";
    $("#navbar").animate({ left: "100vw" }, 300);
    $("body").css({ position: "static", overflow: "auto" });
  }
}

//Mobile link clicked -> close menu
$(document).ready(function() {
  $("li").on("click", function() {
    if (document.getElementById("navcontents").className != "topnav") {
      document.getElementById("navcontents").className = "topnav";
      $("#navbar").css("left", "100vw");
    }
  });
});

//Change Menu style on resize
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

let skillsShown = 0;

//Set menu colours Function
let setMenuColor = () => {
  if (
    $(document).scrollTop() / $(window).height() > 1 - 0.03 &&
    $(window).width() > 800
  ) {
    $("li a").css("color", "#5C5757");
    //Skills animate section
    if (!$("#skills-left").hasClass("animate")) {
      $("#skills-left").addClass("animate");
    }

    if (skillsShown === 0) {
      let timeM = 70;

      setTimeout(function() {
        $("#skill-id-1").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 1 * timeM);

      setTimeout(function() {
        $("#skill-id-2").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 2 * timeM);

      setTimeout(function() {
        $("#skill-id-3").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 3 * timeM);

      setTimeout(function() {
        $("#skill-id-4").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 4 * timeM);

      setTimeout(function() {
        $("#skill-id-5").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 5 * timeM);

      setTimeout(function() {
        $("#skill-id-6").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 6 * timeM);

      setTimeout(function() {
        $("#skill-id-7").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 7 * timeM);

      setTimeout(function() {
        $("#skill-id-8").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 8 * timeM);

      setTimeout(function() {
        $("#skill-id-9").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 9 * timeM);

      setTimeout(function() {
        $("#skill-id-10").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 10 * timeM);

      setTimeout(function() {
        $("#skill-id-11").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 11 * timeM);

      setTimeout(function() {
        $("#skill-id-12").animate({ opacity: "1" }, 10 * timeM);
        console.log("hey");
      }, 12 * timeM);

      /*
      let i = 1;
      let skillsTime;
      while(i < 12){
        console.log(i);
        skillsTime = [i] * 1500;
      i++;
    }
*/

      skillsShown = 1;
    }
  } else {
    $("li a").css("color", "#FFF");
  }
};

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
