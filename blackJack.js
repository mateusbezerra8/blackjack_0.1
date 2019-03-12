
// Main and constant variables

const mainDeck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const deckValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let cardTable1, cardTable2, iCardTable1, iCardTable2, iCardPlayer = null
let cardsPlayer = []
let sumPlayer = 0
let gameStarted = false


// Function called for Buttons

function newGame() {

	getRandomValue()
	iCardTable1 = iCard
	getRandomValue()
	iCardTable2 = iCard

	cardTable1 = mainDeck[iCardTable1]
	cardTable2 = mainDeck[iCardTable2]
	valueCardTable1 = deckValues[iCardTable1]
	valueCardTable2 = deckValues[iCardTable2]

	getRandomValue()
	iCardPlayer = iCard
	getRandomValue()
	iCardPlayer2 = iCard // This variable was entered only to receive the value that will be entered as the second element of the cardsPlayer array.

	cardsPlayer = []
	cardsPlayer[0] = mainDeck[iCardPlayer]
	cardsPlayer[1] = mainDeck[iCardPlayer2]
	valueCardPlayer1 = deckValues[iCardPlayer]
	valueCardPlayer2 = deckValues[iCardPlayer2]

	sumValues(cardsPlayer[0], cardsPlayer[1], valueCardPlayer1, valueCardPlayer2)
	sumPlayer = 0
	sumPlayer = sum 

	restartWindow()

	blockButtons(gameStarted)
}


function nextCard() {

	getRandomValue()
	iCardPlayer = iCard
	
	cardsPlayer.push(mainDeck[iCardPlayer])
	sumPlayer = (sumPlayer+deckValues[iCardPlayer])

	showCardsAndSumPlayer(cardsPlayer, sumPlayer)
	
	burst(sumPlayer)
}


function finish() {
	
	sumValues(cardTable1, cardTable2, valueCardTable1, valueCardTable2)
	sumTable = sum
	show(cardTable2, sumPlayer, sumTable)
	blockButtons()
}


// Visual Functions

function restartWindow() {
	
	document.getElementById("burst").innerHTML = ('<h2></h2>')
	document.getElementById("result").innerHTML = ('<h1></h1>')
	document.getElementById("showCardTable1").innerHTML = ('Card 1: ' + cardTable1)
	document.getElementById("showCardTable2").innerHTML = ('Card 2: ...')
	document.getElementById("showSumTable").innerHTML = ('<h3>Dealer Sum : '+ valueCardTable1 +'</h3>')
	document.getElementById("showCardsPlayer").innerHTML = ('Your Cards: '+cardsPlayer)
	document.getElementById("showSumPlayer").innerHTML = ('<h3> Player Sum: '+ sumPlayer +'</h3>')
}


function show(cardTable2, sumPlayer, sumTable) {
	
	document.getElementById("showCardTable2").innerHTML = ('Card 2: ' + cardTable2)
	
	document.getElementById("showSumTable").innerHTML = ('<h3>Dealer Sum : '+ (sumTable) +'<h3>')
	
	if(sumPlayer < sumTable){

		document.getElementById('result').innerHTML = ('<h1> You Lose!! </h1>')
	}
	if(sumPlayer > sumTable && sumPlayer <= 21) {

		document.getElementById('result').innerHTML = ('<h1> You Win!! </h1>')
	}
	if(sumPlayer == sumTable) {

		document.getElementById('result').innerHTML = ('<h1> Draw!! </h1>')
	}
}


function showCardsAndSumPlayer(cardsPlayer, sumPlayer) {
	
	document.getElementById("showCardsPlayer").innerHTML = ('Your Cards: '+ cardsPlayer)
	document.getElementById("showSumPlayer").innerHTML = ('<h3> Player Sum: ' + sumPlayer + ' </h3>')	
}


function burst(sumPlayer) {
	
	if (sumPlayer >= 22) {

		document.getElementById("burst").innerHTML = ('<h2>BURST!!</h2>')

		blockButtons()
	}
}


// Calculation Functions

function getRandomValue() {

	iCard = Math.floor(Math.random()*13)
	return iCard
}


function sumValues(card1, card2, valueCard1, valueCard2) {
	
	if(card1 == 'A' && valueCard2 == 10) {

		valueCard1 = 11
	}
	if(cardTable2 == 'A' && valueCard1 == 10) {

		valueCard2 = 11
	}

	sum = (valueCard1 + valueCard2)
	return sum
}


// Event Functions

function blockButtons(gameStarted) {
	
	if(gameStarted == false) {

		document.getElementById("newGame").setAttribute("disabled", "disabled")
		document.getElementById("nextCard").removeAttribute("disabled")
		document.getElementById("finish").removeAttribute("disabled")
		gameStarted = true
		
	} else {

		document.getElementById("newGame").removeAttribute("disabled")
		document.getElementById("nextCard").setAttribute("disabled", "disabled")
		document.getElementById("finish").setAttribute("disabled", "disabled")
		gameStarted = false
	}
}