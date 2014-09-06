 "use strict";

$(document).ready(function(e) {
	
	$('.movie').click(calculate);
	var extension_data = {action:10, animated: 5, comedy: 30, horror: 50, romance: 5,};
	
	function calculate () {
		$('.redbar').removeClass('hide').css('top', '99px').css('height', '1px');
		$('.redbar.action').animate({'top': 100 - extension_data.action, height: extension_data.action,}, 500);
		$('.redbar.animated').animate({'top': 100 - extension_data.animated, height: extension_data.animated,}, 500);
		$('.redbar.comedy').animate({'top': 100 - extension_data.comedy, height: extension_data.comedy,}, 500);
		$('.redbar.horror').animate({'top': 100 - extension_data.horror, height: extension_data.horror,}, 500);
		$('.redbar.romance').animate({'top': 100 - extension_data.romance, height: extension_data.romance,}, 500);
		$('.content').removeClass('hide');
		
	}
	
	
});