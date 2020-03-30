 $("document").ready(function(){

    $("#btn1").click(function(){

        $(".first").fadeToggle(3000);
        $(".one").hide();

    });
    
    
    
    $("#rightInOne").click(function(){
        
       $(".second").fadeToggle(3000);
       $(".first").hide();
    });
    
    $("#leftInTwo").click(function(){
       $(".first").fadeToggle(3000);
       $(".second").hide();
    });
    
    $("#rightInTwo").click(function(){
        $(".third").fadeToggle(3000);
        $(".second").hide();
    });
    
    $("#leftInThree").click(function(){
        $(".second").fadeToggle(3000);
        $(".third").hide();
        
    });
    
    $("#rightInThree").click(function(){
       $(".fourth").fadeToggle(3000);
       $(".third").hide();
    });
    
    
    $("#leftInFour").click(function(){
      $(".third").fadeToggle(3000);
      $(".fourth").hide();

    });

    $("#rightInFour").click(function(){

        $(".fifth").fadeToggle(3000);
        $(".fourth").hide();

    }) ;

    $("#leftInFive").click(function(){

        $(".fourth").fadeToggle(3000);
        $(".fifth").hide();

    });

    $("#rightInFive").click(function(){
        $(".sixth").fadeToggle(3000);
        $(".fifth").hide();

    });

    $("#leftInSix").click(function(){

        $(".fifth").fadeToggle(3000);
        $(".sixth").hide();

    });
    $("#rightInSix").click(function(){
        $(".seventh").fadeToggle(3000);
        $(".sixth").hide()

    });

    $("#leftInSeven").click(function(){

        $(".sixth").fadeToggle(3000);
        $(".seventh").hide();

    });
    
    $("#rightInSeven").click(function(){
        $(".seventh").hide();
        $(".eighth").fadeToggle(3000);
        

    });
    
    $("#rightInEighth").click(function(){
        $(".Eighth").hide();
        $(".first").fadeToggle(3000);
        
       alert("Thank you for being patient :) "); 
    });
$("#leftInEight").click(function(){
   $(".Eighth").hide();
   $(".seventh").fadetoggle(3000);
});

});