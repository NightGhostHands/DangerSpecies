$(document).ready(function() {


	$(".button").click(function() {

        if ($('.container').css('display') == 'none') {
            $(".container").show("slide", 200);
            $(".button").addClass("red");
        }

        else {
            $(".container").hide("slide", 200);
            $(".button").removeClass("red");
        };

	});


});
