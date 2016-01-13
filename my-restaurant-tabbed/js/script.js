$(document).ready(function() {
	
	addHeaderAndFooter();
	addImage();

});

function addToContent(childElement) {
	$('#content').append(childElement);
};

function addHeaderAndFooter() {
	var header = $("<div id='header'></div>");
	var headerText = $("<h1></h1>").text('Rohan\'s Pizza Corner');
	var footer = $("<div id='footer'></div>");
	var footerText = $("<p>Get the best pizza in town</p>");
	var footerText2 = $('<p style="float:right">At the most affordable prices</p>');

	addToContent(header);
	header.append(headerText);
	addToContent(footer);
	footer.append(footerText);
	footer.append(footerText2);
};

function addImage() {
	var image = $("<div id='image'></div>");
	addToContent(image);
};
				
			