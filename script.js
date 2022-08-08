$(document).ready(function(){
    $(window).scroll(function(){
      console.log(this.scrollY);
        if(this.scrollY > 20){
            $('.navbar').addClass("prstnt");
        }
        else{
            $(".navbar").removeClass("prstnt");

      /*  if(this.scrollY > 1180){
          $('.navbar.prstnt .logo').css('color','#871128');
          console.log("change pls");
        }
        else{
          $('.navbar.prstnt .logo').css('color','#871128');
        }*/


        }
    });



    //toggle hamburger

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.hamburger-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.hamburger-menu i').toggleClass("active");
    })

    $('.navbar .menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.hamburger-menu i').toggleClass("active");
    })


});
