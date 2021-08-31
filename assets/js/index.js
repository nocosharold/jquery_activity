import character_datas from "./character.js";

$(document).ready(function(){
    loadHeroCharacters();
    loadVillainCharacters();

    $("#match_result").hide();
    $("body")
        .on("click", ".recruit_hero_button", switchScreen)
        .on("click", ".fight_button", generateMatchResult)
        .on("click", "#close_modal_button", closeModal);
});

/**
*   DOCU: This function is used to close modal
*   Last updated at: August 31, 2021
*   @author Harold
*/
function closeModal(){
    $(".modal_wrap").fadeOut().hide();
    $(".modal_content h2").text("WAITING FIGHT RESULT...");
}

/**
*   DOCU: This function is used to load hero characters
*   Last updated at: August 31, 2021
*   @author Harold
*/
function loadHeroCharacters(){
    let hero_template = ``;
    
    for(let character_index = 0; character_index < character_datas.length; character_index++){
        if(character_datas[character_index].character_type === "hero"){
            hero_template += `<div class="character" data-character_id=${character_datas[character_index].id}>`;
            hero_template += ` <img src=${ character_datas[character_index].img }>`;
            hero_template += ` <h3>${ character_datas[character_index].name }</h3>`;
            hero_template += ` <button type="button" class="recruit_hero_button">RECRUIT</button>`;
            hero_template += `</div>`;
        }
    }

    hero_template += `<h2>RECRUIT <span>A HERO</span></h2>`;
    $("#recruit_screen").html(hero_template);
}

/**
*   DOCU: This function is used to load villain characters
*   Last updated at: August 31, 2021
*   @author Harold
*/
function loadVillainCharacters(){
    let villain_template = ``;
    let get_villains = character_datas.filter((character)=> character.character_type === "villain");
    let random_data = get_villains[Math.floor(Math.random() * get_villains.length)];
    let selected_villains = get_villains.filter((villain) => villain.id != random_data.id);

    for(let villain_index = 0; villain_index < selected_villains.length; villain_index++){
        villain_template += `<li class="character">`;
        villain_template += `   <img src=${ selected_villains[villain_index].img }>`;
        villain_template += `   <h3>${ selected_villains[villain_index].name }</h3>`;
        villain_template += `   <button type="button" class="fight_button">FIGHT!</button>`;
        villain_template += `</li>`
    }

    $(".villains").html(villain_template);
}

/**
*   DOCU: This function is used to recruit a hero then switch to fight screen
* 	Triggered by .on("click", ".recruit_hero_button", switchScreen)
*   Last updated at: August 27, 2021
*   @author Harold
*/
function switchScreen(){
    let character_id = $(this).parent().data("character_id");
    let find_hero = character_datas.filter((character) => character.id === character_id);
    const {img, name} =  find_hero[0];

    /* Recruit Hero */
    $("#selected_hero img").attr("src",img);
    $("#selected_hero h3").text(name);

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

    loadVillainCharacters();
    $("#close_modal_button").removeClass("show");
}