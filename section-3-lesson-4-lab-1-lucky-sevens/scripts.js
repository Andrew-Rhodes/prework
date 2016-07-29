function roll() {
	
	var startingCash = Number(document.getElementById("bet").value.replace("$" , ""));
	var cash = startingCash;
	var balanceHistory = [];

	function playOneRound() {

		function rollTwoDice() {
			var dice1 = Math.floor(Math.random() * 6) + 1;
			var dice2 = Math.floor(Math.random() * 6) + 1;
			var diceTotal = dice1 + dice2;

			return diceTotal;
		}

		function checkIfSeven(diceTotal) {
			// if (diceTotal == 7) {
			// 	return 4;
			// } else {
			// 	return  -1;
			// }	

			return diceTotal === 7 ? 4 : -1;
		}
		return checkIfSeven(rollTwoDice());
	}



	function getMaxOfArray(balanceHistory) {
		return Math.max.apply(null, balanceHistory);
	}

	var rollNumber = 1;

	while (cash >= 1) {
		// testing only 
		// console.log('-------------- roll number: ' + rollNumber + '--------');
		rollNumber += 1;
		var result = playOneRound();
		// testing only 
		// console.log(result);
		cash += result;
		balanceHistory.push(cash);
		// testing only 
		// console.log(cash);
		if (cash === 0) {
		// testing only
		// console.log("GAME OVER");
		}
	}

	var totalNumberOfRolls = rollNumber;
	var maxBalance = getMaxOfArray(balanceHistory);
	var rollNumberToMaxBalance = balanceHistory.indexOf(maxBalance) + 1;
	var stats = [startingCash, totalNumberOfRolls, maxBalance, rollNumberToMaxBalance];



	function unhide() {
		myTable.style.visibility = "visible";
	}
	
	unhide();

	document.getElementById("betStart").innerText = document.getElementById("bet").value;
	document.getElementById("brokeCount").innerText = totalNumberOfRolls;
	document.getElementById("highAmmount").innerText = "$" + maxBalance;
	document.getElementById("rollToHigh").innerText = rollNumberToMaxBalance;
	document.getElementById("playBtn").value = "Play Again?";


}

function resultHide() {
	var myTable = document.getElementById("myTable");
	myTable.style.visibility = "hidden";

}