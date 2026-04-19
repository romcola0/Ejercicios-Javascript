const questions = [
  {category: "Maths", question: "What is 2+2?", choices: ["2", "3", "4"], answer: "4"},
  {category: "Science", question: "What is H2O?", choices: ["Air", "Water", "Iron"], answer: "Water"},
  {category: "Spanish", question: "How to say hello in spanish?", choices: ["Hola", "Que", "Tal"], answer: "Hola"},
  {category: "Films", question: "How many films does kunf fu panda have?", choices: ["2", "3", "4"], answer: "4"},
  {category: "Sports", question: "What is the last point in tennis?", choices: ["15", "30", "40"], answer: "40"},
];

function getRandomQuestion (arr) {
  const num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  return arr[num]
}

function getRandomComputerChoice (arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num]
}


function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const randomAnswer = getRandomComputerChoice(randomQuestion.choices);

console.log(getResults(randomQuestion,randomAnswer));
