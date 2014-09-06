 "use strict";

$(document).ready(function(e) {
	$('.rating').click(rate);
	
	function rate () {
		// 'this' is currently the bar that was clicked on
		var clicked_percent = $(this).attr("data-rating");
		
		$('.rating').each(function() {
			// 'this' is now going to be each rating bar in turn
			
			var this_percent = $(this).attr("data-rating");
			if (this_percent <= clicked_percent) {
				$(this).addClass('red');
			}
			else {
				$(this).removeClass('red');
			}
		});
			
	}
	
});