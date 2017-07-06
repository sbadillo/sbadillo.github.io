
$(document).ready(function() {
	

	$('nav a.nav-link').click(function(e) {
		var $this = $(this);
		// console.log('wololo');
		console.log($this.attr('href'));

		$this.siblings().removeClass('active').end().addClass('active');
		e.preventDefault();

    // Load the page content in to element
    // with id #content using ajax (There are other ways)
    $('section#base-main').load($this.attr('href') 'section');
});

	
});



