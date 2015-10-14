$(document).ready(function(){
    
    //var name = prompt("Please enter your name", "Rohan");
    if (name!=null) {
    	$("#heading").text(name+"'s SketchPad");
    };


    $('#size').on('change', function() {
	  	$("#board").empty();
	  	
	  	var size = $("#size").val();
		var pixel_size = (480/size)-2;	//to accomadate borders
	    
	    for (var i = 0; i < size; i++) {
	   		
	    	for (var j = 0; j < size; j++) {
	   			$('#board').append($("<div></div>")
	   				.attr({	onmouseleave:"mouseLeavePixelHandler(this)",
	   						onmouseenter:"mouseEnterPixelHandler(this)"})
	   				.addClass("pixel")
	   				.css({"height":pixel_size,"width":pixel_size, "display": "inline-block"}));
	    	 };
	    };
	});


	$('#reset').on('click',function(){
		$("#board").empty();
		$("#size").val('0');
	});

	
});

function mouseEnterPixelHandler(obj){
		$(obj).css("background-color","green");
	}

function mouseLeavePixelHandler (obj) {
		$(obj).css("background-color","yellow");
	}

