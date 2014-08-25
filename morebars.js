 "use strict";

$(document).ready(function(e) {
	
	$('.short').click(calculate);
	
	function calculate () {
		$('.redbar').removeClass('hide').removeClass('top');
		$('.redbar').addClass('bottom');
		$('.redbar').switchClass('bottom', 'top', 500);
	}
	
});