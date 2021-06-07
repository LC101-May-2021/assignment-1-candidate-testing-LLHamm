const input = require ('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space?", "2) True or false: 5 kilometer == 5000 meters?", "3) (5 + 3)/2 * 10 = ?", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "5) What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("Enter candidate name: ");
  console.log(`Greetings, ${candidateName}!`);
}

function askQuestion() {
  for(i=0; i<5; i++) {
    let answer = input.question(questions[i]).toLowerCase();
    console.log("Your answer: " + answer);
    console.log("Correct answer: " + correctAnswers[i] + "\n");

    candidateAnswers.push(answer);
  }
}

function gradeQuiz(candidateAnswers) {
  let numCorrect = 0;
  for(i=0; i<candidateAnswers.length; i++) {
    if(candidateAnswers[i] === correctAnswers[i]) {
      numCorrect++;
    }
  } 

let grade = numCorrect / 5 * 100;

console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of 5 responses correct) <<<`);

if (gradeQuiz > 80) {
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(">>> Status: FAILED <<<");
  }
return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(candidateAnswers);
}

runProgram(this.candidateAnswers);

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};