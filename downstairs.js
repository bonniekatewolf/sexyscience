"use strict";

$(function () {

    $('.lipstick').hover(function () {
        $('.lipstick').addClass('lips');
        $('.explanationlips').removeClass('hide');

    }, function () {
        $('.lipstick').removeClass('lips');
    });

});