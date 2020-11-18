$(document).ready(function(){
    authors = $(".author-name")
    authorsImages = $(".author-img img")
    showSecretTextBtn = $(".third-alert h1 span")
    counter = 0
    
    showSecretTextBtn.on("click",function(){
        $(".the-end").css("opacity","1")
        authorsImages.each(function(){
            if(counter==0){
                $(this).css("animation","photoDesapear 3s ease forwards")
                counter++
            } else {
                $(this).css("animation","photoDesapear 3s ease forwards 6s")
                counter = 0
            }
        })
        authors.each(function(){
            if(counter==0){
                $(this).css("transform","translate(-30%, 50%)")
                counter++
            } else {
                $(this).css("transform","translate(40%, 50%)")
                counter = 0
            }
        })
    })
})
