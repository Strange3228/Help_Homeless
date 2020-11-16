$(document).ready(function (){
    const nextSectionBtn = $("#nextSectionBtn");
    const prevSectionBtn = $("#prevSectionBtn");

    let sections = $(".section");
    let counter = 0;

    nextSectionBtn.click(function (){
        counter = counter + 1
        $('html, body').animate({
            scrollTop: sections[counter].offsetTop
        }, 1300);
        $(".people-inf").addClass("bgActive")
        if(counter + 1 == sections.length){
            nextSectionBtn.removeClass("nav-btn-active")
        }
        if(counter == 1){
            prevSectionBtn.addClass("nav-btn-active")
        }
    });
    prevSectionBtn.click(function (){
        counter = counter - 1
        if(counter == 0){
            $('html, body').animate({
                scrollTop: 0
            }, 1300);
            $(".people-inf").removeClass("bgActive")
        } else {
            $('html, body').animate({
                scrollTop: sections[counter].offsetTop
            }, 1300);
        }
        if(counter == 0){
            prevSectionBtn.removeClass("nav-btn-active")
        }
        if(counter == 1){
            nextSectionBtn.addClass("nav-btn-active")
        }
    });
});