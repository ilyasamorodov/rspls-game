/* Варианты */
var choices = ["rock", "paper", "scissors", "lizard", "spock"];

/* Исходы */
var results = ["Поражение", "Победа", "Ничья"];

/* Правила игры */
var rules = {
	"rock" : {"scissors" : 1, "paper" : 0, "lizard" : 1, "spock" : 0},
	"scissors" : {"paper" : 1, "rock" : 0, "lizard" : 1, "spock" : 0},
	"paper" : {"rock" : 1, "scissors" : 0, "lizard" : 0, "spock" : 1},
	"lizard" : {"rock" : 0, "scissors" : 0, "paper" : 1, "spock" : 1},
	"spock" : {"rock" : 1, "scissors" : 1, "paper" : 0, "lizard" : 0}
};				

/* Логика */
var buttons = document.querySelector(".user");

buttons.addEventListener("click", function(e){

	var humanChoice = e.target.dataset.choice;
	var computerChoice = getComputerChoice();					
	var gameResult = getWinner(humanChoice, computerChoice);					
	
	document.querySelector("[name='computerChoice']").className = computerChoice;
	document.querySelector("[name='gameResult']").innerText = results[gameResult];
	
});

/* Вычисление победителя */
function getWinner(hChoice, cChoice){
	if (hChoice == cChoice) 
		return 2;
	else
		return rules[hChoice][cChoice];
}

/* Получение выбора компьютера */
function getComputerChoice(){
	var choiceIndex = getRandomNumber(0,choices.length-1);
	return choices[choiceIndex];
}

/* Получение случайного числа в заданном диапазоне */
function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}