 "use strict";

$(document).ready(function(e) {
	
	$('.short').click(calculate);
	var extension_data = {short:20, long: 80,};
	
	function calculate () {
		$('.redbar').removeClass('hide').css('top', '99px').css('height', '1px');
		$('.redbar.left').animate({'top': 100 - extension_data.short, height: extension_data.short,}, 500);
		$('.redbar.right').animate({'top': 100 - extension_data.long, height: extension_data.long,}, 500);
		$('.content').removeClass('hide');
		
	}
	
	
});