$(document).ready(function(){

    var mixer = mixitup('.container');
});

    $(".js--services-section").waypoint(function(direction){
      if(direction == "down"){
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    });