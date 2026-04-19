let count = 0
function cardCounter (card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    return ++count > 0 ? count + " Bet" : count + " Hold"
  } else if ([7, 8, 9].includes(card)) {
    return count > 0 ? count + " Bet" : count + " Hold"
  } else if ([10, "J", "Q", "K", "A"].includes(card)){
    return --count > 0 ? count + " Bet" : count + " Hold"
  }
}

console.log(cardCounter(3))
console.log(cardCounter(3))
console.log(cardCounter(3))
console.log(cardCounter("A"))
console.log(cardCounter("A"))
console.log(cardCounter("A"))
console.log(cardCounter("A"))
console.log(cardCounter("A"))