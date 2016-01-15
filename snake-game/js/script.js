var BOARD_SIZE = 35;
var FRUIT_GENERATION_SPEED = 500;
var fruitX;
var fruitY;
var fruit_on_board = false;
var score = 0;  
var snake = {head : [17,17], direction : 'u', size : 2, speed : 300, body : [[18,17],[19,17]]};

function drawBoard () {
	//board size is 35 x 35 with each pixel size being 15px x 15px
	for (var i = 0; i < BOARD_SIZE; i++) {
		for (var j = 0; j < BOARD_SIZE; j++) {
			$("#board-wrapper").append("<div id='"+i+"-"+j+"' class='pixel'></div>");
		};
	};

	$("#"+snake.head[0]+"-"+snake.head[1]).addClass('snake-head');
	$("#"+snake.body[0][0]+"-"+snake.body[0][1]).addClass('snake-body');
	$("#"+snake.body[1][0]+"-"+snake.body[1][1]).addClass('snake-body');	
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

	//move the snake's head

	setDirection();
	var currentRow = snake.head[0];
	var currentCol = snake.head[1];
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
	snake.head = [newRow,newCol];

	//move the body

	for (var i = snake.body.length-1; i > 0; i--) {
		snake.body[i] = snake.body[i-1]
	};

	snake.body[0] = [currentRow,currentCol];
	
	$(".pixel").removeClass('snake-body');

	for (var j = 0; j < snake.body.length; j++) {
		$("#"+snake.body[j][0]+"-"+snake.body[j][1]).addClass('snake-body');
	};

	checkCollision();
	eatFruit();
}


function increaseSize(){
	var temp = []
	switch(snake.direction){
		case 'l' : temp = [snake.body[snake.size-1][0],snake.body[snake.size-1][1]+1]; break;
		case 'r' : temp = [snake.body[snake.size-1][0],snake.body[snake.size-1][1]-1]; break;
		case 'd' : temp = [snake.body[snake.size-1][0]-1,snake.body[snake.size-1][1]]; break;
		case 'u' : temp = [snake.body[snake.size-1][0]+1,snake.body[snake.size-1][1]]; break;
	}
	snake.size++;
	snake.body.push(temp);
}

function createFruit () {
	var randomRow = Math.floor((Math.random() * (BOARD_SIZE-1)) + 1);
	var randomCol = Math.floor((Math.random() * (BOARD_SIZE-1)) + 1);
	var randomCordinate = [randomRow, randomCol];

	if(snake.body.indexOf(randomCordinate)<0 && !fruit_on_board){
		$("#"+randomRow+"-"+randomCol).addClass('fruit');
		fruit_on_board = true;
		fruitY = randomRow;
		fruitX = randomCol;
	} 

}


function eatFruit () {
	if (snake.head[0] === fruitY && snake.head[1] === fruitX) {
		console.log(++score);
		$("#"+fruitY+"-"+fruitX).removeClass('fruit');
		increaseSize();	
		fruit_on_board = false;
	};
}

function checkCollision(){
	if (snake.head[0] === BOARD_SIZE || snake.head[0] === -1 || snake.head[1] === -1 || snake.head[1] === BOARD_SIZE) {
		alert("Game Over : Don't bang up against the walls")
	}
	else{
		
		for (var i = 0; i < snake.body.length; i++) {
			if (snake.head[0]===snake.body[i][0] && snake.head[1]===snake.body[i][1]) {
				alert("Game Over : Don't eat up yourself");
			};
		};


	};
}


$( document ).ready(function() {
	drawBoard();
	setInterval(move, snake.speed);
	setInterval(createFruit, FRUIT_GENERATION_SPEED);
});