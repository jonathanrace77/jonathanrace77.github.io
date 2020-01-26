$(document).ready(function() {
    $("h1").hide().fadeIn(2500);
    $("p").hide().fadeIn(4000);
    });

$(document).ready(function() {
    $("#navbar").animate({ top: '0px' }, 800);
    });

function mobileMenu() {
    var x = document.getElementById("navcontents");
    if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById('navbar').style.display = 'block';
    } else {
    x.className = "topnav";
    document.getElementById('navbar').style.display = 'none';
    }
}