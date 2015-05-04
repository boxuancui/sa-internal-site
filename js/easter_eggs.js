$(document).ready(function() {
    // two eggs in about section, mouseover event triggers change of text and disappear
    $("#egg_site_is").show();
    $("#egg_site_is_not").show();
    $("#egg_site_is").mouseover(function(){$(this).text("I'm kidding, now go back to work! Ciao~").delay(1200).fadeOut('slow');});
    $("#egg_site_is_not").mouseover(function(){$(this).text("There is something called Email if you miss him.").delay(1200).fadeOut('slow');});

    // mysterious guy in contact section
    $("#egg_mysterious_guy").show();
    $("#egg_mysterious_guy").click( function() {
        $(this).attr("src", "img/poptocat.png").hide("explode", 1500);
    });

    // hover delay 5 seconds and removes "img/src" for mysterious guys
    $("#egg_mysterious_guy").hoverIntent({
        over: function(){$(this).attr("src", "");},
        out: function(){$(this).attr("src", "img/poptocat.png");},
        sensitivity: 1,
        interval: 5000
    });

    // hover delay 5 seconds and changes pic for killer whale
    $("#egg_killer_whale").hoverIntent({
        over: function(){$(this).attr("src", "img/bad_killer_whale.png");},
        out: function(){$(this).attr("src", "img/killer_whale.png");},
        sensitivity: 1,
        interval: 5000
    });

    // hover delay 5 seconds and changes pic for worker bee
    $("#egg_worker_bee").hoverIntent({
        over: function(){$(this).attr("src", "img/bad_worker_bee.png");},
        out: function(){$(this).attr("src", "img/worker_bee.png");},
        sensitivity: 1,
        interval: 5000
    });

    // hover delay 5 seconds and changes photo of greg
    $("#egg_greg_contact").hoverIntent({
        over: function(){$(this).attr("src", "img/greg_badass.png");},
        out: function(){$(this).attr("src", "img/allen-greg.jpg");},
        sensitivity: 1,
        interval: 5000
    });

    // hover delay 5 seconds and changes photo for sarah
    $("#egg_sarah_contact").hoverIntent({
        over: function(){$(this).attr("src", "img/sarah_badass.png");},
        out: function(){$(this).attr("src", "img/traweek-sarah.jpg");},
        sensitivity: 1,
        interval: 5000
    });

    // summon bo
    var egg = new Egg("s,u,m,m,o,n,b,o", function() {
        $("#page-top .navbar-brand").trigger("click");
        $("#egg_killer_whale").fadeOut(3000);
        $("#egg_worker_bee").fadeOut(3000);
        $("#egg_summon_bo").delay(2900).fadeIn(4000).children().children().attr("src", "img/whatsup.png");
    }).listen();
    $("#egg_summon_bo").click(function() {
        $(this).fadeOut(1500);
        $("#egg_killer_whale").delay(1500).fadeIn(2000);
        $("#egg_worker_bee").delay(1500).fadeIn(2000);
    });
})
