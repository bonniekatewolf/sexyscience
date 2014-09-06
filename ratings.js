"use strict";

$(document).ready(function(e) {
	$('.rating').click(rate);

	var answers = {gracie: "none", zoe: "none", rachel: "none"};

	function rate() {
		// 'this' is currently the bar that was clicked on
		var clicked_percent = $(this).attr("data-rating");
		var clicked_percent_name = $(this).attr("data-name");

		answers[clicked_percent_name] = clicked_percent;

		$('.rating').each(function() {
			// 'this' is now going to be each rating bar in turn

			var base_percent = $(this).attr("data-rating");
			var base_percent_name = $(this).attr("data-name");

			if (base_percent_name == clicked_percent_name) {
				if (base_percent <= clicked_percent) {
					$(this).addClass('red');
				} else {
					$(this).removeClass('red');
				}
			}
		});
		
		//it starts at 0, then after the clicks, if it is still at 0, it will remove the hide class

		var not_selected = 0;
		
		for (var name in answers) {
			if (answers[name] == "none") {
				not_selected += 1;
			}
		}
		
		if (not_selected == 0) {
			$('.number').removeClass('hide');
		}

	}

}); 