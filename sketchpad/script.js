$(document).ready(function(){
    
    //var name = prompt("Please enter your name", "Rohan");
    if (name!=null) {
    	$("#heading").text(name+"'s SketchPad");
    };

    var size = $("#size").val();
    var pixel_size = (480/size)-2; 	//to accomadate borders

    $('#size').on('change', function() {
	  	$("#board").empty();
	  	
	  	size = $("#size").val();
		pixel_size = (480/size)-2;	//to accomadate borders
	    
	    for (var i = 0; i < size; i++) {
	   		
	    	for (var j = 0; j < size; j++) {
	   			$('#board').append($("<div></div>").addClass("pixel").css({"height":pixel_size,"width":pixel_size, "display": "inline-block"}));
	    	 };

	    	 //$('#board').append("<br>");
	    };
	});

});