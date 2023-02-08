const isNumber = (number) => /^\d+$/.test(number); // Risto

console.log("Let's play a a game! Your computer will think of a number and you have to guess it. Easy, right?! First, let's set a few conditions ... ");

let tryAgain = true;


let maxTries = prompt('How many tries do you want to have? ... ');
let activeTries = 0;
let triesLeft = maxTries - activeTries;
let minRangeInput = Number(prompt('Enter the minimum random number: ... '));
let maxRangeInput = Number(prompt('Enter the maximum random number: ... '));
let minRange = minRangeInput;
let maxRange = maxRangeInput;
let randomNumber = (Math.random() * (maxRange - minRange) + 1).toFixed(0).trim();
let correctAnswer = randomNumber;
let hintsInput = prompt('Do you want hints for the random number? [YES/NO]? ').toLowerCase().trim();
let hintsYes = false;
let hintBigger = `HINT: The number is bigger than you entered...`;
let hintSmaller = `HINT: The number is smaller than you entered...`;

//console.log(correctAnswer);

while (triesLeft > 0) {
  if (hintsInput === 'yes') {
    hintsYes = true;
  }
  let userInput = prompt('Enter your guess: ... ').trim();
  if (!isNumber(userInput)) {
    console.log('Your guess has to be a number!');
    continue;
  }   if (userInput === correctAnswer) {
      console.log('CONGRATS! You are right. There is no prize!');
        let tryAgainInput = prompt('Do you want to try again? [YES/NO]').toLowerCase().trim();
          tryAgain = false;
          if (tryAgainInput === 'yes') {
            tryAgain = true;
          } else {
              console.log('So sad.')
              break;
            }
      break;
      } else if (userInput != correctAnswer) {
        activeTries = activeTries + 1;
        triesLeft = maxTries - activeTries;
          if (hintsYes) {
            if (correctAnswer < userInput) {
              console.log(`You're WRONG, you can try again ${triesLeft} times. ${hintSmaller}`);
            } else if (correctAnswer > userInput) {
              console.log(`You're WRONG, you can try again ${triesLeft} times. ${hintBigger}`);
            }         
          }
          if (!hintsYes) {
            if (correctAnswer != userInput) {
              console.log(`You're WRONG, you can try again ${triesLeft} times.`);
              } if (triesLeft === 0) {
                console.log(`GAME OVER. The correct answer would've been ${correctAnswer}.`);
                break;
                }
          }
          
    }
}
