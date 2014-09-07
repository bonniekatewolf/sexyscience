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

$(function() {

	$('.blue').click(function() {
		$('.dress').addClass('blue');
		$('.mouseover').unbind();
	});

	$('.green').click(function() {
		$('.dress').addClass('green');
		$('.mouseover').unbind();
	});

	$('.red').click(function() {
		$('.dress').addClass('red');
		$('.mouseover').unbind();
	});

	$('.white').click(function() {
		$('.dress').addClass('white');
		$('.mouseover').unbind();
	});
	
	$('.mouseover').click(function() {
		$('.explanation').removeClass('hide');
	});

}); 