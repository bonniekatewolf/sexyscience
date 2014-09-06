"use strict";

$(document).ready(function(e) {
	$('.rating').click(rate);

	function rate() {
		// 'this' is currently the bar that was clicked on
		var clicked_percent = $(this).attr("data-rating");
		var clicked_percent_name = $(this).attr("data-name");

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

	}

}); 