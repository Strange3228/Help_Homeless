$(document).ready(function (){
    $("#fromPosterToPeopleInf").click(function (){
        $('html, body').animate({
            scrollTop: $(".people-inf").offset().top
        }, 1300);
        $(".people-inf").addClass("bgActive")
    });
});