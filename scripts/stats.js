$(document).ready(function(){
    /********DATA*********/
    dataTotal = [
        [
            647258,
            412700,
            234558,
            119813,
            60988,
            0
        ],
        [
            639784,
            404525,
            235259,
            120115,
            62223,
            0
        ],
        [
            630227,
            392131,
            238096,
            107212,
            73362,
            0
        ],
        [
            637077,
            395140,
            241937,
            106062,
            74087,
            0
        ],
        [
            623788,
            387613,
            236175,
            103522,
            65455,
            0
        ],
        [
            621553,
            382156,
            239397,
            96268,
            60579,
            0
        ],
        [
            590364,
            368174,
            222190,
            86289,
            55619,
            0
        ],
        [
            576450,
            360189,
            216261,
            83989,
            49689,
            0
        ],
        [
            564708,
            358422,
            206286,
            83170,
            47725,
            36907
        ],
        [
            549928,
            355212,
            194716,
            77486,
            39471,
            35686
        ],
        [
            550996,
            366585,
            184411,
            86705,
            40020,
            38303
        ],
        [
            552830,
            372417,
            180413,
            88640,
            37878,
            36361
        ],
        [
            567715,
            396045,
            171670,
            96141,
            37085,
            35038
        ]
    ]
    dataGender = [343187, 219911, 3255, 1362]
    dataRace = [270607,225735,124615,36868,17966,9311,7228]
    Years = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2017,2018,2019]

    /*********VARIABLES**********/
    nextYearBtn = $("#nextYear")
    prevYearBtn= $("#prevYear")
    allStats = $(".count")
    statsDivsTotal = $(".total-number .count")
    statsDivsGender = $(".count-by-gender .count")
    statsDivsRace = $(".count-by-race .count")
    yearIndicator = $(".year-indicator")
    nextSectionBtn = $("#nextSectionBtn");
    prevSectionBtn = $("#prevSectionBtn");

    YearCounter = 0
    counterStatsDivTotal = 0
    sectionCounter = 1 //KOSTYL FOR ANIMATION ON SCROLL

    yearIndicator.text(Years[YearCounter])
    
    /********ON_PAGE_LOAD**********/
    nextSectionBtn.on("click",function(){
        sectionCounter = sectionCounter + 1
        if(sectionCounter == 3){
            statsDivsTotal.each(function(){
                heightOfDiv = dataTotal[YearCounter][counterStatsDivTotal] / (600000/100)
                $(this).css("height",`${heightOfDiv*($(".total-number").height()/100)}px`)
                $(this).addClass("count-on-the-top-of-div").attr('data-content',`${dataTotal[YearCounter][counterStatsDivTotal]}`)
                counterStatsDivTotal = counterStatsDivTotal + 1
            })
            counterStatsDivTotal = 0
        
            statsDivsGender.each(function(){
                if(dataGender[counterStatsDivTotal] < 5000){
                    $(this).css("width","30px")
                    $(this).css("height","30px")
                    $(this).css("border-radius","50%")
                    $(this).addClass("count-on-the-right-of-div").attr('data-content',`${dataGender[counterStatsDivTotal]}`)
                    counterStatsDivTotal = counterStatsDivTotal + 1
                } else {
                    heightOfDiv = dataGender[counterStatsDivTotal] / (350000/100)
                    $(this).css("width",`${heightOfDiv*($(".count-by-gender").width()/100)}px`)
                    $(this).addClass("count-on-the-right-of-div").attr('data-content',`${dataGender[counterStatsDivTotal]}`)
                    counterStatsDivTotal = counterStatsDivTotal + 1
                }
            })
            counterStatsDivTotal = 0
        
            statsDivsRace.each(function(){
                if(dataRace[counterStatsDivTotal] < 20000){
                    $(this).css("width","35px")
                    $(this).css("height","35px")
                    $(this).css("border-radius","50%")
                    $(this).addClass("count-on-the-right-of-div").attr('data-content',`${dataRace[counterStatsDivTotal]}`)
                    counterStatsDivTotal = counterStatsDivTotal + 1
                } else {
                    heightOfDiv = dataRace[counterStatsDivTotal] / (270000/100)
                    $(this).css("width",`${heightOfDiv*(500/100)}px`)
                    $(this).addClass("count-on-the-right-of-div").attr('data-content',`${dataRace[counterStatsDivTotal]}`)
                    counterStatsDivTotal = counterStatsDivTotal + 1
                }
            })
            counterStatsDivTotal = 0
            allStats.each(function(){
                $(this).on("transitionend",function(){
                    $(this).css("transition","height 0.5s ease")
                })
            })
        }
    })
    prevSectionBtn.on("click",function(){
        sectionCounter = sectionCounter - 1
    })

    /******NEXT_YEAR_BUTTON**************/
    nextYearBtn.on("click",function(){
        YearCounter = YearCounter + 1
        statsDivsTotal.each(function(){
            heightOfDiv = dataTotal[YearCounter][counterStatsDivTotal] / (600000/100)
            $(this).css("height",`${heightOfDiv*($(".total-number").height()/100)}px`)
            $(this).addClass("count-on-the-top-of-div").attr('data-content',`${dataTotal[YearCounter][counterStatsDivTotal]}`)
            counterStatsDivTotal = counterStatsDivTotal + 1
        })
        counterStatsDivTotal = 0
        yearIndicator.text(Years[YearCounter])
    })
    /*********PREV_YEAR_BUTTON***********/
    prevYearBtn.on("click",function(){
        YearCounter = YearCounter - 1
        statsDivsTotal.each(function(){
            heightOfDiv = dataTotal[YearCounter][counterStatsDivTotal] / (600000/100)
            $(this).css("height",`${heightOfDiv*($(".total-number").height()/100)}px`)
            $(this).addClass("count-on-the-top-of-div").attr('data-content',`${dataTotal[YearCounter][counterStatsDivTotal]}`)
            counterStatsDivTotal = counterStatsDivTotal + 1
        })
        counterStatsDivTotal = 0
        yearIndicator.text(Years[YearCounter])
    })
}) 