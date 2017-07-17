$(document).ready(function() {

	// 	if arriving to other than /index.html,
	//	assign class="active" to active path

	$('nav a.nav-link').each(function(){
		var path = $(this).attr('href');
		var location = window.location.pathname.toString();
		var pathName = $(this).text().toString().toLowerCase();

		// check if we are in one of the main menu items...
		if (path == location) {
			$(this).siblings().removeClass('active').end().addClass('active');
		}

		// else check if we are inside a major section (i.e. blog)
		else if (location.indexOf(pathName) !== -1) {
			console.log('somewhere inside ', pathName);
			$(this).siblings().removeClass('active').end().addClass('active');
		}

	});

	// on click on menu: 	
	// 		1. change active menu link 
	// 		2. load page content with ajax

	$('nav a.nav-link').click(function(e) {

		// 1.

		var $this = $(this);
		$this.siblings().removeClass('active').end().addClass('active');

    	// 2.

		e.preventDefault();  // this prevents default events and goes for ajax
		var loadurl = $this.attr('href');
		var loadsection = loadurl + ' ' + 'section#content'; // will load only this section
		console.log('ajax load --> '+ loadsection);
		$('section#base-main').load(loadsection);

		window.history.pushState("object or string", "Title", loadurl);
	});


	// start typed.js animationn
	var typed = new Typed('#typed', {
		// most timing parameters in miliseconds.
		stringsElement: '#typed-strings',
		typeSpeed : 40,
		startDelay : 500,
		backSpeed : 30

	});

	});




