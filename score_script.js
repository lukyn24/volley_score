var scoreFirst = document.querySelector("#score1");
var timeOutFirst = document.querySelector("#timeOut1");
var setsFirt = document.querySelector("#scoreSets1");
var buttonPointHome = document.querySelector("#pointHome");
var buttonTimeOutHome = document.querySelector("#timeOutHome");
var buttonSetHome = document.querySelector("#setHome");
var scoreSecond = document.querySelector("#score2");
var timeOutSecond = document.querySelector("#timeOut2");
var setsSecond = document.querySelector("#scoreSets2");
var buttonPointAway = document.querySelector("#pointAway");
var buttonTimeOutAway = document.querySelector("#timeOutAway");
var buttonSetAway = document.querySelector("#setAway");
var resetSetButton = document.querySelector("#resetSet");
var resetMatchButton = document.querySelector("#resetMatch");
var goldenSetButton = document.querySelector("#goldenSet");
var setType = document.querySelector("#setType");
var score1 = 0;
var score2 = 0;
var timeOuts1 = 3;
var timeOuts2 = 3;
var set1 = 0;
var set2 = 0;
var setOver = false;
var winningScore = 25;

function goldenSet() {
	winningScore = 15;
}

buttonPointHome.addEventListener("click", function () {
	if (!setOver) {
	score1++;
	if (score1 >= winningScore) {
		if (score1 > (score2 + 1)) {
		setOver = true;
		if (set1 < 3) {
			set1++;
			setsFirt.textContent = set1;
			}
		}
	}
	scoreFirst.textContent = score1;
	}
});

buttonTimeOutHome.addEventListener("click", function () {
	if (!setOver && timeOuts1 > 0) {
	timeOuts1--;
	timeOutFirst.textContent = timeOuts1;
	}
});

buttonSetHome.addEventListener("click", function () {
	if (set1 < 3) {
	set1++;
	setsFirt.textContent = set1;
	}
});

buttonPointAway.addEventListener("click", function () {
	if (!setOver) {
	score2++;
	if (score2 >= winningScore) {
		if (score2 > (score1 + 1)) {
		setOver = true;
			if (set2 < 3) {
			set2++;
			setsSecond.textContent = set2;
			}
		}
	}
	scoreSecond.textContent = score2;
	}
});

buttonTimeOutAway.addEventListener("click", function () {
	if (!setOver && timeOuts2 > 0) {
	timeOuts2--;
	timeOutSecond.textContent = timeOuts2;
	}
});

buttonSetAway.addEventListener("click", function () {
	if (set2 < 3) {
	set2++;
	setsSecond.textContent = set2;
	}
});

resetSetButton.addEventListener("click", function () {
	resetSet();
});

resetMatchButton.addEventListener("click", function () {
	resetMatch();
});

goldenSetButton.addEventListener("click", function () {
	goldenSet();
	setType.textContent = "Zlaty set";
});

function resetSet() {
	score1 = 0;
	score2 = 0;
	scoreFirst.textContent = score1;
	scoreSecond.textContent = score2;
	timeOuts1 = 3;
	timeOuts2 = 3;
	timeOutFirst.textContent = timeOuts1;
	timeOutSecond.textContent = timeOuts2;
	setOver = false;
	winningScore = 25;
	setType.textContent = "Normalni set";
}

function resetMatch() {
	score1 = 0;
	score2 = 0;
	scoreFirst.textContent = score1;
	scoreSecond.textContent = score2;
	timeOuts1 = 3;
	timeOuts2 = 3;
	timeOutFirst.textContent = timeOuts1;
	timeOutSecond.textContent = timeOuts2;
	set1 = 0;
	set2 = 0;
	setsFirt.textContent = set1;
	setsSecond.textContent = set2;
	setOver = false;
	winningScore = 25;
	setType.textContent = "Normalni set";
}