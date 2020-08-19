$(window).on("load resize scroll",function(){
    $(".STEP").each(function() {
        var windowTop = $(window).scrollTop(); //Distance from top of the page, increases as user scrolls down.
        var elementTop = $(this).offset().top; //Constant as to where an object's y position on the screen is.
        var leftPosition = windowTop - elementTop; //Negative at first but as the element goes above the user's screen it becomes positive
        const PeriodReseter= Math.PI/2
        var moveleft = ($(window).width()/-2) * Math.sin(PeriodReseter*Math.cos(PeriodReseter*Math.sin(Math.PI*leftPosition/$(window).height())-PeriodReseter))- $(window).width()/2;
        var moveright = ($(window).width()/-6) * Math.sin(PeriodReseter*Math.cos(PeriodReseter*Math.sin(Math.PI*leftPosition/$(window).height())-PeriodReseter)) - $(window).width()/6;
        console.log(moveleft)
        $(this)
            .find("p")
            .css({left: moveleft});
        $(this)
            .find("svg")
            .css({right:moveright});
    });
});