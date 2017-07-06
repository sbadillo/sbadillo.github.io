


$(document).ready(function() {
	
	// 	if arriving to other than /index.html,
	//	assign active to active path

	$('nav a.nav-link').each(function(){
		var path = $(this).attr('href');
		if (path == window.location.pathname) {
			console.log('we landed in: ' + path );
			$(this).siblings().removeClass('active').end().addClass('active');
		}
	});



	// on click on menu: 	1. change active menu link 
	// 						2. load page content with ajax

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


});



