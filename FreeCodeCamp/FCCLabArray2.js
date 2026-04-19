
// --- EJERCICIO 2 ARRAYS: Golf ---

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 

function golfScore (num1, num2) {
  if (num2 === 1){
    return "Hole-in-one!"
  } else if (num2 <= num1 - 2){
    return "Eagle"
  } else if (num2 <= num1 - 1){
    return "Birdie"
  } else if (num2 === num1){
    return "Par"
  } else if (num2 === num1 + 1){
    return "Bogey"
  } else if (num2 === num1 + 2){
    return "Double Bogey"
  } else if (num2 >= num1 + 3){
    return "Go Home!"
  }
}
console.log(golfScore(3,7))
