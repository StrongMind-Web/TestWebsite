$(document).ready(function() {

	// Background randomizer
	var bg1 = 'img/s1BG2.jpg';
	var bg2 = 'img/s2BG2.jpg';
	var bgList = [bg1, bg2];
	var bg = bgList[Math.floor(Math.random()*bgList.length)];
	$('body').css('background-image', 'url("' + bg + '")');

	setInterval(function() {
		bg = bgList[Math.floor(Math.random()*bgList.length)];
		$('body').css('background-image', 'url("' + bg + '")');
	}, 10000);

	// Using waypoints.js to highlight the side nav bullets when scrolling to each section
	$('#s1Nav').addClass('aCurrent');
	var s1wp = new Waypoint({
	  	element: document.getElementById('s1'),
	  	handler: function() {
			var thisElem = this.element.id;
			$('.sideNav > ul > li > a').each(function() {
				if ( $(this).hasClass('aCurrent') ) {
					$(this).removeClass('aCurrent');
				}
					$('#' + thisElem + 'Nav').addClass('aCurrent');
			});
		},
		offset: -20 // the first waypoint was not triggering without this
	});
	var s2wp = new Waypoint({
	  	element: document.getElementById('s2'),
	  	handler: function() {
			var thisElem = this.element.id;
			$('.sideNav > ul > li > a').each(function() {
				if ( $(this).hasClass('aCurrent') ) {
					$(this).removeClass('aCurrent');
				}
					$('#' + thisElem + 'Nav').addClass('aCurrent');
			});
		},
	});
	var s3wp = new Waypoint({
	  	element: document.getElementById('s3'),
	  	handler: function() {
			var thisElem = this.element.id;
			$('.sideNav > ul > li > a').each(function() {
				if ( $(this).hasClass('aCurrent') ) {
					$(this).removeClass('aCurrent');
				}
					$('#' + thisElem + 'Nav').addClass('aCurrent');
			});
		}
	});

	// Smooth scrolling to anchor links
	$('a[href^=\\#]').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});

	// Scroll Reveals
	window.sr = ScrollReveal();
	sr.reveal('.s1content h1', { reset: true, scale: 1, origin: 'top' });
	sr.reveal('.s2content h1', { reset: false, scale: 1, origin: 'top' });
	sr.reveal('.s1content > ul > li', { reset: true, scale: 1, distance: '100px', duration: 1000, delay: 500 }, 50);
	sr.reveal('.s2content img', { reset: true, scale: 1, distance: '100px', duration: 500, delay: 250 }, 250);
	sr.reveal('.s2img', { reset: true, scale: 1, origin: 'left', distance: '100vh', duration: 2000, delay: 1000});

});
