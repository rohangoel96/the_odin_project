var snake = { position : [17,17], direction : 'u', speed : 300}

function drawBoard () {
	//board size is 35 x 35 with each pixel size being 15px x 15px
	for (var i = 0; i < 35; i++) {
		for (var j = 0; j < 35; j++) {
			$("#board-wrapper").append("<div id='"+i+"-"+j+"' class='pixel'></div>");
		};
	};

	$("#"+snake.position[0]+"-"+snake.position[1]).addClass('snake-head');
}

function setDirection(){
	$(document).keydown(function(event) {
	  if (event.which === 39) {
	    snake.direction = 'r';
	  } else if (event.which === 37) {
	    snake.direction = 'l';
	  } else if (event.which === 38) {
	    snake.direction = 'u';
	  } else if (event.which === 40) {
	    snake.direction = 'd';
	  }
	});
}

function move(){

	setDirection();

	var currentRow = snake.position[0];
	var currentCol = snake.position[1];
	var newRow = currentRow;
	var newCol = currentCol;
	
	switch(snake.direction){
		case 'l' : newCol = currentCol - 1; break;
		case 'r' : newCol = currentCol + 1; break;
		case 'd' : newRow = currentRow + 1; break;
		case 'u' : newRow = currentRow - 1; break;
	}

	$("#"+currentRow+"-"+currentCol).removeClass('snake-head');
	$("#"+newRow+"-"+newCol).addClass('snake-head');
	snake.position = [newRow,newCol];
}

$( document ).ready(function() {
	drawBoard();
	setInterval(move, snake.speed);
});