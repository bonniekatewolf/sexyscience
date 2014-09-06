 "use strict";

$(document).ready(function(e) {
	
  $.get('menu.html', function(template) {
  	var pagename = $('body').attr('id');
  	
  	var view = {};
  	view[pagename] = true;
  	
    var rendered = Mustache.render(template, view);
    $('#menu').html(rendered);
  });
	
});