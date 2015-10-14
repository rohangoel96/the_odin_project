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


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function mouseEnterPixelHandler(obj){

	var color;
	
	if ($("input[name=type]:checked").val()=='regular') {

		color = "yellow";

	}
	else{

		color = getRandomColor();

	}
	$(obj).css("background-color",color);

}

function mouseLeavePixelHandler (obj) {
	
	if ($("input[name=type]:checked").val()=='regular') {
		
		color="green";	
	
	}
	else{
			
			color = getRandomColor();

	}	

	$(obj).css("background-color",color);

}


