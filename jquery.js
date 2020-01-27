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



$(window).on('resize', function(event){
	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize > 800){
        document.getElementById('navbar').style.display = 'block';
        document.getElementById("navcontents").className = "topnav";
    } else if(windowSize <= 800){
        document.getElementById('navbar').style.display = 'none';
        
    }
});