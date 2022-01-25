$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("prstnt");
            $('.hamburger-menu').addClass("prstnt");
        }
        else{
            $(".navbar").removeClass("prstnt");
            $('.hamburger-menu').removeClass("prstnt");
        }
    });

    
    //toggle hamburger

    $('.hamburger-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.hamburger-menu i').toggleClass("active");
    })
});