$(document).ready(function(){
    $("body").on("click", ".recruit_hero_button", function(){
        $("#fight_screen").show();
        $("#recruit_screen").hide();
    });

    $("body").on("click", ".fight_button", function(){
        $(".modal_wrap").fadeIn().show();
        generateMatchResult();
    });

    $("body").on("click", "#close_modal_button", function(){
        $(".modal_wrap").fadeOut().hide();
        $(".modal_content").find("h2").text("WAITING FIGHT RESULT...");
        $("#close_modal_button").removeClass("show");
    });
});

function generateMatchResult() {
    let is_won = Math.random() < 0.5;
    
    setTimeout(()=> {
        $(".modal_content").find("h2").text(`YOU ${ (is_won) ? "WON" : "LOST" } THE FIGHT!`);
        $("#close_modal_button").addClass("show");
    }, 3000 );
    console.log(is_won);
}