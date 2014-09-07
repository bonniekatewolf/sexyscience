"use strict";

$(function() {

	// $('.red').hover(onething, anotherthing)

	$('.blue').hover(function() {
		$('.dress').addClass('blue');
	}, function() {
		$('.dress').removeClass('blue');
	});

	$('.green').hover(function() {
		$('.dress').addClass('green');
	}, function() {
		$('.dress').removeClass('green');
	});

	$('.red').hover(function() {
		$('.dress').addClass('red');
	}, function() {
		$('.dress').removeClass('red');
	});

	$('.white').hover(function() {
		$('.dress').addClass('white');
	}, function() {
		$('.dress').removeClass('white');
	});

}); 