var hamburgerMenu = $('.hamburger-menu')
var dropdownMenu = $('.dropdown-menu')



$(document).ready(function(){

	hamburgerMenu.click(function(){
		dropdownMenu.slideToggle( 'slow');
		
	});

});