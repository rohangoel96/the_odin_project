var num1;
var num2;
var result;

function updateDisplay (text) {
	document.getElementById('screen-text').innerHTML += text;
}

function clear() {
	document.getElementById('screen-text').innerHTML = ''
	document.getElementById('operation-summary').innerHTML = '_'
}

function add(num1,num2){
	return num1+num2
}


function multiply(num1,num2){
	return num1*num2
}


function divide(num1,num2){
	return num1/num2
}


function subtract(num1,num2){
	return num1-num2
}


var num = document.getElementsByClassName("num");

function showNumber(){
    var value = this.getElementsByTagName("p")[0].innerHTML;
    updateDisplay(value);
};

for (var i = 0; i < num.length; i++) {
    num[i].addEventListener('click', showNumber, false);
}


function delActionListener(){
	document.getElementById('screen-text').innerHTML = document.getElementById('screen-text').innerHTML.slice(0,-1)
}

document.getElementById('del').addEventListener('click', delActionListener, false)


var opList = document.getElementsByClassName("operation");
var op;
var opButton;

function getNum1(){
	num1 =  document.getElementById('screen-text').innerHTML;
	op = this.id;
	opButton = this.getElementsByTagName("p")[0].innerHTML;
	clear();
}

for (var i = 0; i < opList.length; i++) {
    opList[i].addEventListener('click', getNum1, false);
}

function getNum2 () {
	num2 =  document.getElementById('screen-text').innerHTML
	
	switch(op){
		case 'add' : result = parseFloat(num1) + parseFloat(num2); break;
		case 'subtract' : result = parseFloat(num1) - parseFloat(num2); break;
		case 'divide' : result = parseFloat(num1) / parseFloat(num2); break;
		case 'multiply' : result = parseFloat(num1) * parseFloat(num2); break;
	}

	clear();
	updateDisplay(result.toFixed(2));
	document.getElementById('operation-summary').innerHTML = num1 + " " + String(opButton) + " " + num2
}

function decimalActionListener (argument) {
	updateDisplay('.');
}

function percentActionListener(){
	document.getElementById('screen-text').innerHTML = document.getElementById('screen-text').innerHTML*0.01
}

document.getElementById('equals').addEventListener('click', getNum2, false);
document.getElementById('clr').addEventListener('click', clear, false);
document.getElementById('decimal').addEventListener('click', decimalActionListener, false);
document.getElementById('percent').addEventListener('click', percentActionListener, false);