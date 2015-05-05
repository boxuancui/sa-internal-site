$(document).ready(function() {
    // Display typed commands
    $("body").on("keyup", function(e) {
        var keypress = String.fromCharCode(e.which);
        $("#commands").css("color", "white").append(keypress).show();
        $("#commands").delay(2000).fadeOut("slow", function(){$(this).empty();});
    });

    // Email both teams
    var email_all = new Egg("e,m,a,i,l,a,l,l,enter", function() {
        window.open("mailto:CustomerKillerWhales@bcg.com;GeoWorkerBees@bcg.com", "_top")
    }).listen();

    // Request S3 access
    var get_s3 = new Egg("g,e,t,s,3,enter", function() {
        $("#aws_s3 li strong:contains('Request BCG S3 Access') a")[0].click()
    }).listen();

    // Request Redshift service
    var get_redshift = new Egg("g,e,t,r,e,d,s,h,i,f,t,enter", function() {
        $("#aws_redshift li strong:contains('Request Redshift Service') a")[0].click()
    }).listen();

    // Get EC2 doc
    var ec2_doc = new Egg("e,c,2,d,o,c,enter", function() {
        $("#aws_ec2 li strong:contains('Access SA EC2') a")[0].click()
    }).listen();

    // Go to RStudio Server
    var get_rstudio = new Egg("g,e,t,r,enter", function() {
        $("#rstudio_server li strong:contains('SA RStudio Server') a")[0].click()
    }).listen();

    // Get RStudio Server doc
    var rstudio_doc = new Egg("r,d,o,c,enter", function() {
        $("#rstudio_server li strong:contains('How to access?') a")[0].click()
    }).listen();

    // Get Shiny doc
    var shiny_doc = new Egg("s,h,i,n,y,d,o,c,enter", function() {
        $("#shiny_app li strong:contains('Deploy Shiny Apps in SA') a")[0].click()
    }).listen();

    // Get GitHub doc
    var get_github = new Egg("g,e,t,g,i,t,h,u,b,enter", function() {
        $("#bcg_github li strong:contains('BCG GitHub') a")[0].click()
    }).listen();

    // Get GitHub doc
    var github_doc = new Egg("g,i,t,h,u,b,d,o,c,enter", function() {
        $("#bcg_github li strong:contains('SA GitHub Overview') a")[0].click()
    }).listen();
});
