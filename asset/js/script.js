$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 220){
    $("#banner").addClass("shrink");
    $("body").css("margin-top", "90px");
    $("#banner").addClass("fixed-top");
    $("#banner .container-fluid .logo-nav").css("opacity", "1");
    $("#banner").css("background-color", "white");
    $("#banner").css("box-shadow", "0 0 5px 1px grey");

  }
  else
  {
    $("#banner").removeClass("shrink");
    $("body").css("margin-top", "0");
    $("#banner").removeClass("fixed-top");
    $("#banner .container-fluid .logo-nav").css("opacity", "0");
    $("#banner").css("background", "none");
    $("#banner").css("box-shadow", "none");

  }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})