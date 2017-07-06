	window.onpopstate = function(e){
		if(e.state){
			document.getElementById("content").innerHTML = e.state.html;
			document.title = e.state.pageTitle;
		}
	};

$(document).ready(function() {
	
	// change active menu link and load content with ajax
	$('nav a.nav-link').click(function(e) {

		var $this = $(this);
		$this.siblings().removeClass('active').end().addClass('active');

    	// This is cool: loading page content 
    	// into section#base-main element with ajax
    	
		e.preventDefault();  // this prevents default events and goes for ajax
		var loadme = $this.attr('href') + ' ' + 'section#content';
		console.log('ajax load --> '+ loadme);
		$('section#base-main').load(loadme);
	});

	
});



