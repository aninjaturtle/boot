$(document).ready(function() {
	$("#menu-button").bind( "click", function() {
	  $('#mobile-menu').toggleClass('open');
	  $('#overlay').show(0);
	});
	
	$("#overlay").bind( "click", function() {
	  $('#mobile-menu').removeClass('open');
	  $('#overlay').hide(0);
	  //basically so that clicking outside closes the menu; but on mobile I think it's immediately undoing the add class above
	});
});