let dealerHand = []
let playerHand = []
let deck = []
// where the player score is displayed
let showPlayer = document.querySelector('.player-score')
// where the dealer score is diplayed
let showDealer = document.querySelector('.dealer-score')
// where message for game status is diplayed
let displayStatus = document.querySelector('.win-lose')
let playerScore = 0
let dealerScore = 0
// this is the function that computes player score from .value. can be made in a for each loop
let countPlayer = () => {
  if (playerHand.length === 2) {
    playerScore = playerHand[0].value + playerHand[1].value
    showPlayer.textContent = playerScore
  }
  if (playerHand.length === 3) {
    playerScore = playerHand[0].value + playerHand[1].value + playerHand[2].value
    showPlayer.textContent = playerScore
  }
  if (playerHand.length === 4) {
    playerScore = playerHand[0].value + playerHand[1].value + playerHand[2].value + playerHand[3].value
    showPlayer.textContent = playerScore
  }
  if (playerHand.length === 5) {
    playerScore = playerHand[0].value + playerHand[1].value + playerHand[2].value + playerHand[3].value + playerHand[4].value
    showPlayer.textContent = playerScore
  }
  if (playerHand.length === 6) {
    playerScore = playerHand[0].value + playerHand[1].value + playerHand[2].value + playerHand[3].value + playerHand[4].value + playerHand[5].value
    showPlayer.textContent = playerScore
  }
}
// this is the function that computes dealer score from .value. can be made in a for each loop
let countDealer = () => {
  if (dealerHand.length === 2) {
    dealerScore = dealerHand[0].value + dealerHand[1].value
    showDealer.textContent = dealerScore
  }
  if (dealerHand.length === 3) {
    dealerScore = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value
    showDealer.textContent = dealerScore
  }
  if (dealerHand.length === 4) {
    dealerScore = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value
    showDealer.textContent = dealerScore
  }
  if (dealerHand.length === 5) {
    dealerScore = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value + dealerHand[4].value
    showDealer.textContent = dealerScore
  }
  if (dealerHand.length === 6) {
    dealerScore = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value + dealerHand[4].value + dealerHand[5].value
    showDealer.textContent = dealerScore
  }
}
const checkWinner = () => {
  if (dealerScore > playerScore && dealerScore <= 21) {
    displayStatus.textContent = 'House drew ' + dealerScore + ', Loser.'
  }
  if (dealerScore < playerScore) {
    displayStatus.textContent = 'Player drew ' + playerScore + ', Winner!'
  }
  if (dealerScore === playerScore) {
    displayStatus.textContent = 'Tie game with ' + dealerScore + ', House always Wins.'
  }
}

const dealToHouse = () => {
  document.querySelector('.hits').classList.add('take-away')
  document.querySelector('.stays').classList.add('take-away')
  document.querySelector('.back').classList.add('take-away')
  dealCardToHouse()
  countDealer()
  // show dealer hidden card and show total then continue down
  if (dealerScore < 17) {
    dealToHouse()
  }
  if ((dealerScore >= 17) && (dealerScore <= 21)) {
    checkWinner()
  }
  if (dealerScore > 21) {
    displayStatus.textContent = 'House Busted With ' + dealerScore + ', Player Wins!'
  }
}

const dealToPlayer = () => {
  dealCardToPlayer()
  countPlayer()
  if (playerScore <= 21) {
    displayStatus.textContent = 'Hit or Stay'
  };
  // link to fucntion to initialize players next card
  if (playerScore > 21) {
    document.querySelector('.hits').classList.add('take-away')
    document.querySelector('.stays').classList.add('take-away')
    displayStatus.textContent = 'Player Busted!, drew ' + playerScore + ', Maybe Next Time'
  }
}

const dealCardToPlayer = upOrDown => {
  countPlayer()
  // Take one card from the deck
  let card = deck.pop()

  // Place that card in the dealer's hand
  playerHand.push(card)

  // Go find my dealer-hand div
  const playerHandDiv = document.querySelector('.player-hand')

  // Make a new image tag in memory
  let image = document.createElement('img')

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/images/${card.face}${card.suit}.jpg`

  // Push that image tag into the DIV as a child
  playerHandDiv.appendChild(image)
}

const dealCardToHouse = upOrDown => {
  // Take one card from the deck
  let card = deck.pop()

  // Place that card in the dealer's hand
  dealerHand.push(card)

  // Go find my dealer-hand div
  const dealerHandDiv = document.querySelector('.dealer-hand')

  // Make a new image tag in memory
  let image = document.createElement('img')

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/images/${card.face}${card.suit}.jpg`

  if (upOrDown === 'down') {
    // Do something to display this card down
    image.src = `/images/blue_back.jpg`
    image.className = 'swing'
  }

  // Push that image tag into the DIV as a child
  dealerHandDiv.appendChild(image)
  // checkWinner()
}

const main = () => {
  let suits = ['C', 'S', 'D', 'H']
  let cards = [
    { value: 2, face: '2' },
    { value: 3, face: '3' },
    { value: 4, face: '4' },
    { value: 5, face: '5' },
    { value: 6, face: '6' },
    { value: 7, face: '7' },
    { value: 8, face: '8' },
    { value: 9, face: '9' },
    { value: 10, face: '10' },
    { value: 10, face: 'J' },
    { value: 10, face: 'Q' },
    { value: 10, face: 'K' },
    { value: 11, face: 'A' }
  ]

  // loop through all the suits
  suits.forEach(suit => {
    // Do this for each suit

    // For this suit go through the cards
    cards.forEach(card => {
      // make a new card to put in the deck
      let newCardForTheDeck = {
        suit: suit,
        value: card.value,
        face: card.face
      }

      // add it to the deck
      deck.push(newCardForTheDeck)
    })
  })

  // Shuffle the deck into a random order
  //
  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let i = 52 - 1; i > 1; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let firstCard = deck[i]
    let secondCard = deck[j]
    deck[i] = secondCard
    deck[j] = firstCard
  }
  dealCardToPlayer('up')
  dealCardToPlayer('up')
  dealCardToHouse('up')
  countPlayer()
  document.querySelector('.hits').addEventListener('click', dealToPlayer)
  document.querySelector('.stays').addEventListener('click', dealToHouse)
  document.querySelector('.new-game').addEventListener('click', () => {
    document.location = '/'
  })
}

document.addEventListener('DOMContentLoaded', main)
