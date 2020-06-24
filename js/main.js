$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
		$('.slider-area').owlCarousel({
			items:1,
			loop:true,
			margin:10,
			nav:false,
			dots:true,
			autoplay:false
		});	

}(jQuery));