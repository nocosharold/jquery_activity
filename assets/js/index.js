$(document).ready(function(){
    $("#match_result").hide();
    $("body")
        .on("click", ".recruit_hero_button", switchScreen)
        .on("click", ".fight_button", generateMatchResult)
        .on("click", "#close_modal_button", function(){
            $(".modal_wrap").fadeOut().hide();
            $(".modal_content h2").text("WAITING FIGHT RESULT...");
        });
});

/**
*   DOCU: This function is used to recruit a hero then switch to fight screen
* 	Triggered by .on("click", ".recruit_hero_button", switchScreen)
*   Last updated at: August 27, 2021
*   @author Harold
*/
function switchScreen(){
    /* Recruit Hero */
    let hero_name = $(this).parent().find('h3').text();
    let hero_image = $(this).parent().find('img').attr('src');
    let selected_character_template = ``
    
    selected_character_template += `<img src=${ hero_image }>`;
    selected_character_template += `<h3>${ hero_name }</h3>`;
    $("#selected_hero").html(selected_character_template);

    /* Switch Screens */
    $("#fight_screen").show();
    $("#recruit_screen").hide();
}

/**
*   DOCU: This function is used to generate match result, and showing who's the villain
* 	Triggered by .on("click", ".fight_button", generateMatchResult)
*   Last updated at: August 27, 2021
*   @author Harold
*/
function generateMatchResult(){
    let is_won = Math.random() < 0.5;
    let villain_name = $(this).parent().find('h3').text();
    let modal_msg = `YOU ${ (is_won) ? "WON" : "LOST" } THE FIGHT against ${ villain_name }!`
    
    $(".modal_wrap").fadeIn().show();
    /** 
    * will show modal then generate if WON/LOST the match
    */
    setTimeout(()=> {
        $("#match_result h2").text(modal_msg);
        $("#match_result").show();
        $("#loading_result").hide();
        $("#close_modal_button").addClass("show");
    }, 3000 );

    $("#close_modal_button").removeClass("show");
}