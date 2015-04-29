$(document).ready(function() {
    $("#bo_fool_around_1").mouseover(function(){$(this).text("I'm kidding, now go back to work! Ciao~").delay(1200).fadeOut('slow');});
    $("#bo_fool_around_2").mouseover(function(){$(this).text("There is something called Email if you miss him.").delay(1200).fadeOut('slow');});
    $("#bo_fool_around_3").click(function(){$(this).fadeOut('slow');});
    $("#bo_fool_around_3").hoverIntent({
        over: function(){$(this).attr("src", "");},
        out: function(){$(this).attr("src", "img/poptocat.png");},
        sensitivity: 1,
        interval: 5000
    });
    $("#bo_fool_around_4").hoverIntent({
        over: function(){$(this).attr("src", "img/bad_killer_whale.png");},
        out: function(){$(this).attr("src", "img/killer_whale.png");},
        sensitivity: 1,
        interval: 5000
    });
    $("#bo_fool_around_5").hoverIntent({
        over: function(){$(this).attr("src", "img/bad_worker_bee.png");},
        out: function(){$(this).attr("src", "img/worker_bee.png");},
        sensitivity: 1,
        interval: 5000
    });
    $("#greg_fool_around_1").hoverIntent({
        over: function(){$(this).attr("src", "img/greg_badass.png");},
        out: function(){$(this).attr("src", "img/allen-greg.jpg");},
        sensitivity: 1,
        interval: 5000
    });
    $("#sarah_fool_around_1").hoverIntent({
        over: function(){$(this).attr("src", "img/sarah_badass.png");},
        out: function(){$(this).attr("src", "img/traweek-sarah.jpg");},
        sensitivity: 1,
        interval: 5000
    });
})
