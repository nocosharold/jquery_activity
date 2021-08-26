let recruite_hero = [
    
];



$(document).ready(function(){
    $("body").on("click", "button", function(){
        $("#fight_screen").show();
        $("#recruit_screen").hide();
    });

    $("body").on("click", ".fight", function(){
        $(".modal_wrap").fadeIn().show();
        let is_won = Math.floor(Math.random() * 2);
        // let is_won = Math.random() < 0.5;
        let result_array = [true,false];
        console.log(is_won);
        setTimeout(()=> {


            $(".modal_content").find("h2").text(`You ${(result_array[is_won]) ? "WON" : "LOST"} the fight`);
            $("#close_modal_button").addClass("show");

        },3000);
    });

    $("body").on("click", "#close_modal_button", function(){
        $(".modal_wrap").fadeOut().hide();
        $(".modal_content").find("h2").text("Waiting for result" );
        $("#close_modal_button").removeClass("show");
    });
});

