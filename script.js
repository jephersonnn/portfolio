$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("prstnt");
        }
        else{
            $(".navbar").removeClass("prstnt");

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