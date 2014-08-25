 "use strict";

$(document).ready(function(e) {
	
  $.get('menu.html', function(template) {
    var rendered = Mustache.render(template, {name: "Menu"});
    $('#menu').html(rendered);
  });
	
});