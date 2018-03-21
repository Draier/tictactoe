var turn = 0;
var triangle = '<i class="icon ion-close-round">';
var circle = '<i class="icon ion-android-radio-button-off"></i>';
var rowsId = ["t1",'t2','t3','m1','m2','m3','b1','b2','b3'];
var Rows = {
				t1:{ space: document.getElementById('t1'), filled:'void'},
				t2:{ space: document.getElementById('t2'), filled:'void'},
				t3:{ space: document.getElementById('t3'), filled:'void'},
				m1:{ space: document.getElementById('m1'), filled:'void'},
				m2:{ space: document.getElementById('m2'), filled:'void'},
				m3:{ space: document.getElementById('m3'), filled:'void'},
				b1:{ space: document.getElementById('b1'), filled:'void'},
				b2:{ space: document.getElementById('b2'), filled:'void'},
				b3:{ space: document.getElementById('b3'), filled:'void'}
};
var start = false;
var empty = true;
var startIA = document.getElementById('IA');
var startHuman = document.getElementById('Human');
startHuman.onclick = function(){
	start = false;
	resetPlayset();
};
startIA.onclick = function(){
	start = true;
	resetPlayset();
};

Object.keys(Rows).forEach(function(key) {
    Rows[key].space.onclick = playMove;
});

function playMove() {
	var currentGrid =  this.id;
 	if(turn % 2 == 0 && Rows[currentGrid].filled == 'void'){
 		this.innerHTML = triangle;
 		Rows[currentGrid].filled = 'Cross';
 		turn++;
 		empty = false;
 		checkWin('Cross');
 		if(empty == false)
 			moveRandom();
 	}
 	else if(Rows[currentGrid].filled == 'void'){
 		this.innerHTML = circle;
 		Rows[currentGrid].filled = 'Circle';
 		turn++;
		empty = false;
 		checkWin('Circle');
 		if(empty == false)
 			moveRandom();
 	}
}

function checkWin(y){
	if(Rows.t1.filled == y && Rows.t2.filled == y && Rows.t3.filled == y) {
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t1.filled == y && Rows.m2.filled == y && Rows.b3.filled==y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.m1.filled ==y && Rows.m2.filled == y && Rows.m3.filled == y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.b1.filled == y && Rows.b2.filled == y && Rows.b3.filled == y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t1.filled == y && Rows.m1.filled == y && Rows.b1.filled == y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t2.filled == y && Rows.m2.filled == y && Rows.b2.filled ==y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t3.filled ==y && Rows.m3.filled == y && Rows.b3.filled ==y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t3.filled == y && Rows.m2.filled == y && Rows.b1.filled == y){
		alert('Congratulations ' + y);
		resetPlayset();
	}
	else if(Rows.t1.filled != 'void' && Rows.t2.filled != 'void' && Rows.t3.filled != 'void' && Rows.m1.filled != 'void' && Rows.m2.filled != 'void' && Rows.m3.filled != 'void' && Rows.b1.filled != 'void' && Rows.b2.filled != 'void' && Rows.b3.filled != 'void'){
		alert(':(');
		resetPlayset();
	}

}

function resetPlayset(){
	Object.keys(Rows).forEach(function(key) {
    Rows[key].space.innerHTML= "";
    Rows[key].filled = "void";
    turn = 0;
	empty = true;
});
	console.log(turn);
	console.log(turn % 2);
	if(start == true){
		moveRandom();
	}
}

function moveRandom(){
	let move = Math.floor(Math.random() * (9 - 0) + 0);
	for(let x = 0; x < 99; x++){
		if(Rows[rowsId[move]].filled != 'void'){
			move = Math.floor(Math.random() * (9 - 0) + 0);
		}
		else{
			if(turn % 2 == 0){
				Rows[rowsId[move]].filled = 'Cross';
				Rows[rowsId[move]].space.innerHTML = triangle;
				turn++;
				checkWin('Cross');
				break;
			}
			else{
				Rows[rowsId[move]].filled = 'Circle';
				Rows[rowsId[move]].space.innerHTML = circle;
				turn++;
				checkWin('Circle');
				break;
			}
		}
	}
}