$(document).ready(function() {
	
	$('li').on('click', function(){
		$('li').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#about').on('click', function(){
		$('#tab-content').text('');
		$('#tab-content').append('\
					<h2>About</h2>\
					<p>This page is designed by Rohan Goel.</p>');
		$('#tab-content').css({'visibility': 'visible'});
	});

	$('#menu').on('click', function(){
		$('#tab-content').text('');
		$('#tab-content').append('\
					<h2>Our Menu</h2>\
					<p>We offfer a lot many things.</p>');
		$('#tab-content').css({'visibility': 'visible'});
	});

	$('#spec').on('click', function(){
		$('#tab-content').text('');
		$('#tab-content').append('\
					<h2>Our Speciality</h2>\
					<p>Our Speciality is Goan Food</p>');
		$('#tab-content').css({'visibility': 'visible'});
	});

	$('#cont').on('click', function(){
		$('#tab-content').text('');
		$('#tab-content').append('\
					<h2>Contact Us</h2>\
					<p>You can contact me at rohangoel0296@gmail.com</p>');
		$('#tab-content').css({'visibility': 'visible'});
	});

	$('#feed').on('click', function(){
		$('#tab-content').text('');
		$('#tab-content').append('\
					<h2>FeedBack</h2>\
					<p>Give me feedback on rohangoel0296@gmail.com. Crticism is welcomed</p>');
		$('#tab-content').css({'visibility': 'visible'});
	});
});
