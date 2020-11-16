$(document).ready(function(){
    /******FOR CIRCLE MOVE ******/
    rotateAngle = 90;
    setInterval(function(){
        $(".movable-div").css("transform",`translate(-50%, -50%) rotate(${rotateAngle}deg)`)
        rotateAngle = rotateAngle + 90
    },5000)

    /*****SLIDER FOR PEOPLE WORDS *******/
    $(".person-words").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
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

    /*****FOR CHANGING PERSON******/
    personsPhotos = [
        "./img/Homeless_photos/Homeless_Image_1.png",
        "./img/Homeless_photos/Homeless_Image_2.png",
        "./img/Homeless_photos/Homeless_Image_3.jpg",
        "./img/Homeless_photos/Homeless_Image_4.jpg",
        "./img/Homeless_photos/Homeless_Image_5.jpg",
        "./img/Homeless_photos/Homeless_Image_6.jpg",
        "./img/Homeless_photos/Homeless_Image_7.jpg",
        "./img/Homeless_photos/Homeless_Image_8.jpg",
        "./img/Homeless_photos/Homeless_Image_9.png",
        "./img/Homeless_photos/Homeless_Image_10.jpg"
    ];
    personsWords = [
        [
            "Experiencing post-natal depression after the birth of her son, Tracy left her family home in Sussex for London in the early ‘90s and soon became homeless",
            '"I didn’t wake up one day and think “I’m going to become homeless” or “I’m going to become an addict”"',
            '"Something happened to me, and unfortunately I took the wrong turn and I went down the wrong path."',
            '"My journey has been up and down, not all plain sailing..."'
        ],
        [
            '"I wake up in the morning with a bit of pride in myself. Before, my days were dark."',
            '"Between the ages of 15 and 17 I was in and out of Young Offenders Institutions. My nickname was Dodger. This continued into my adult life until I met a judge who could tell I wanted to do better for myself."',
            '"Two years ago I was having problems socialising. I’m confident – I can talk to absolutely anyone – but I get really bad bouts of depression."',
            '"If you can guide just one person, you’ve done something positive. Nobody deserves to be unhappy, nobody deserves to be lonely or isolated."'
        ],
        [
            '"When you’re on the streets that environment becomes all you know, it almost becomes an addiction."',
            '"There wasn’t any safety net"',
            '"I am one of the lucky few who has managed to get stability, I truly believe I am one of the lucky ones. Not everyone is going to end up like me, but it’s not that they don’t want to. "',
            '"With people who are street homeless, it’s not as easy as just giving them a roof over their head."'
        ],
        [
            '"I had lost everything through alcohol. Lost my home, my friends, most of my family, my job, my car and all the material things I once had. Most of all I lost myself."',
            '"I lost all confidence and self-esteem and I isolated myself with alcohol. Alcohol was my ‘everything’ and my only friend. My depression grew..."',
            '"When the detox was ‘over,’ I was left with this big question: who am I?"',
            '"Looking back on this now it seems like I was in a cloud of insanity. Alcohol had taken me to this place."'
        ],
        [
            '"I’ve had a really chequered past; in and out of prison for many years. This is the first time I’ve stayed out of prison. It’s been over six years. I used to use drugs. I was addicted to heroin. I was habitually using crack cocaine."',
            '"There were times when I tried to stop using drugs but there seemed to be so many triggers and pulls that always dragged me back in."',
            '"Volunteering gives me structure. Without it, I would have drowned. I would have gone back straight into what I was doing. "',
            '"These days I just enjoy pursuing the arts, going to art galleries and just enjoying life. I enjoy my kids and my grandkids. "'
        ],
        [
            '"My life for two or three years was sleeping rough, begging and day centres."',
            '"I was being paid Housing Benefit directly and spending it – I had no budgeting skills whatsoever."',
            '"I was spending my Housing Benefit because I was hooked on Spice [synthetic cannabinoids]. I was smoking it all the time for about three years."',
            '"Then, I was sleeping in Piccadilly for a while and I got an infection. "'
        ],
        [
            '"About 10 years ago problems started for me in Aldershot, where I’m from. Things just weren’t working out, so I packed a bag, and hopped on a train to London."',
            '"I arrived at Waterloo with just my bag. I saw people begging, so I just thought, “I’ll do that too”."',
            '"I found a place where I could sleep by the station. This little cubby hole where I could get my head down. I was sleeping rough for about a year, year and a half."',
            '"So what’s my future? Well, I’m not sure. But I’ve got more of a direction now than I used to have."'
        ],
        [
            '"Seven out of 10 Americans are one paycheck away from being homeless."',
            '"I told myself when I was broke and homeless that my biggest goal was just to have a house. That goal was achieved. I am just really, really lucky."',
            '"I was planning on my future as a homeless person. I had a really good spot picked out."',
            '"The world of the homeless is a tough and interesting world."'
        ],
        [
            '"1"',
            '"2"',
            '"3"',
            '"4"'
        ],
        [
            '"1"',
            '"2"',
            '"3"',
            '"4"'
        ],

    ]
    console.log(personsWords[0][1]);
    let personCounter = 0
    nextPersonBtn = $(".next-person-btn");
    prevPersonBtn = $(".prev-person-btn");
    personPhoto = $(".photo img")
    personsWordsDOM = $(".person-words div p")
    console.log(personsWordsDOM);

    nextPersonBtn.on("click",function(){
        if(personCounter == 8){
            nextPersonBtn.css("opacity","0")
            nextPersonBtn.css("pointer-events","none")
            personCounter = personCounter + 1
            personPhoto.css("animation","imgDisapearNext 0.3s ease forwards")
            personPhoto.css("z-index","0")
            personPhoto.on("animationend",function(){
                personPhoto.attr("src",`${personsPhotos[personCounter]}`)
                personPhoto.css("animation","imgShowNext 0.3s ease forwards")
            })
            $.each(personsWordsDOM, function(){
                $(this).css("animation","textHide 0.3s ease forwards")
                $(this).on("animationend", function() {
                    console.log(personsWordsDOM[1]);
                    $(personsWordsDOM[0]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[1]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[2]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[3]).text(personsWords[personCounter][1])
                    $(personsWordsDOM[4]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[5]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[6]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[7]).text(personsWords[personCounter][1])
                    $(this).css("animation","textShow 0.3s ease forwards")
                })
            })
        }
        else {
            prevPersonBtn.css("opacity","1")
            prevPersonBtn.css("pointer-events","all")
            nextPersonBtn.css("opacity","1")
            nextPersonBtn.css("pointer-events","all")
            personCounter = personCounter + 1
            personPhoto.css("animation","imgDisapearNext 0.3s ease forwards")
            personPhoto.css("z-index","0")
            personPhoto.on("animationend",function(){
                personPhoto.attr("src",`${personsPhotos[personCounter]}`)
                personPhoto.css("animation","imgShowNext 0.3s ease forwards")
            })
            $.each(personsWordsDOM, function(){
                $(this).css("animation","textHide 0.3s ease forwards")
                $(this).on("animationend", function() {
                    console.log(personsWordsDOM[1]);
                    $(personsWordsDOM[0]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[1]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[2]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[3]).text(personsWords[personCounter][1])
                    $(personsWordsDOM[4]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[5]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[6]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[7]).text(personsWords[personCounter][1])
                    $(this).css("animation","textShow 0.3s ease forwards")
                })
            })
        }
    })


    prevPersonBtn.on("click",function(){
        if(personCounter == 1){
            prevPersonBtn.css("opacity","0")
            prevPersonBtn.css("pointer-events","none")
            personCounter = personCounter - 1
            personPhoto.css("animation","imgDisapearPrev 0.3s ease forwards")
            personPhoto.css("z-index","0")
            personPhoto.on("animationend",function(){
                personPhoto.attr("src",`${personsPhotos[personCounter]}`)
                personPhoto.css("animation","imgShow 0.3s ease forwards")
            })
            $.each(personsWordsDOM, function(){
                $(this).css("animation","textHide 0.3s ease forwards")
                $(this).on("animationend", function() {
                    console.log(personsWordsDOM[1]);
                    $(personsWordsDOM[0]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[1]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[2]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[3]).text(personsWords[personCounter][1])
                    $(personsWordsDOM[4]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[5]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[6]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[7]).text(personsWords[personCounter][1])
                    $(this).css("animation","textShow 0.3s ease forwards")
                })
            })
        }
        else {
            nextPersonBtn.css("opacity","1")
            nextPersonBtn.css("pointer-events","all")
            personCounter = personCounter - 1
            personPhoto.css("animation","imgDisapearPrev 0.3s ease forwards")
            personPhoto.css("z-index","0")
            personPhoto.on("animationend",function(){
                personPhoto.attr("src",`${personsPhotos[personCounter]}`)
                personPhoto.css("animation","imgShowPrev 0.3s ease forwards")
            })
            $.each(personsWordsDOM, function(){
                $(this).css("animation","textHide 0.3s ease forwards")
                $(this).on("animationend", function() {
                    console.log(personsWordsDOM[1]);
                    $(personsWordsDOM[0]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[1]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[2]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[3]).text(personsWords[personCounter][1])
                    $(personsWordsDOM[4]).text(personsWords[personCounter][2])
                    $(personsWordsDOM[5]).text(personsWords[personCounter][3])
                    $(personsWordsDOM[6]).text(personsWords[personCounter][0])
                    $(personsWordsDOM[7]).text(personsWords[personCounter][1])
                    $(this).css("animation","textShow 0.3s ease forwards")
                })
            })
        }
    })
})