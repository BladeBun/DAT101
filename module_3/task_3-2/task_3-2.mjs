"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let ascending_numbers = " ";
for(let i = 1; i <= 10; i++){
  ascending_numbers += i + ",";
}
let descending_numbers = " ";
for(let i = 10; i >= 1; i--){
  descending_numbers += i + ",";
}
printOut(ascending_numbers.slice(0,-1));

printOut(descending_numbers.slice(0,-1));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secret_number = 45;
let guessed_number = 0;
while(guessed_number !== secret_number) {
    guessed_number = Math.floor(Math.random()*60);
}
printOut("Tallet er " + guessed_number);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secret_number2 = 2024;
let guessed_number2 = 0;
let guessed_count = 0;
const guessed_start = Date.now();
while(guessed_number2 !== secret_number2) {
    guessed_number2 = Math.floor(Math.random()*1000000);
    guessed_count += 1;
}
const guessed_finish = Date.now();
const guessed_time = guessed_finish - guessed_start;

printOut("Tallet er " + guessed_number2);
printOut("Datamaskinen brukte " + guessed_count + " runder");
printOut("Og det tok " + guessed_time + " millisek.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
let result = "";
for(let i = 1; i <= 200; i++){
  while(isPrime(i)){
    result += i + ",";
    break;
  }
}
printOut(result.slice(0, -1));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result2 = "";
for (let i = 1; i <= 7; i++) {
  for(let j = 1; j <= 9; j++){
      result2 += "K" + j + "R" + i + " ";
  }
  result2 += "<br>";
}
printOut(result2);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result3 = "";
function getOutput(currentPoints, currentMaxPoints) {
  let points = currentMaxPoints;
  let pointPercent = Math.floor( points / 236 * 100 );
  let grade = "";
  let output = "";

  if(pointPercent >= 89){
      grade = "A";
  } else if(pointPercent >= 77){
      grade = "B";
  } else if(pointPercent >= 65){
      grade = "C";
  } else if(pointPercent >= 53){
      grade = "D";
  } else if(pointPercent >= 41){
      grade = "E";
  } else {
      grade = "F";
  }

  output = currentPoints + " fikk " + currentMaxPoints + " poeng. Som er " + pointPercent + "% og gir karakteren " + grade + "<br>";
  return output;
}
let points = {
  Kandidat1: Math.floor(Math.random() * 236),
  Kandidat2: Math.floor(Math.random() * 236),
  Kandidat3: Math.floor(Math.random() * 236),
  Kandidat4: Math.floor(Math.random() * 236),
  Kandidat5: Math.floor(Math.random() * 236)
}

let sortedGrades = "";
for(let point in points){
  let currentPoints = "";
  let currentMaxPoints = -1;

  for(point in points){
      if(points[point] > currentMaxPoints){
          currentMaxPoints = points[point];
          currentPoints = point;
      }
  }

  sortedGrades += getOutput(currentPoints,currentMaxPoints);
  points[currentPoints] = -1;

}

result3 = sortedGrades;
printOut(result3);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here! */

// Function to roll six dice
function rollDice() {
  const dice = [];
  for (let i = 0; i < 6; i++) {
    dice[i] = Math.floor(Math.random() * 6) + 1;
  }
  return dice;
}

// Function to check for a full straight (1-6)
function isFullStraight(dice) {
  const sortedDice = dice.slice().sort((a, b) => a - b);
  for (let i = 0; i < 6; i++) {
    if (sortedDice[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

// Function to check for 3 pairs
function isThreePairs(dice) {
  const counts = {};
  for (let die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }
  let pairs = 0;
  for (let count of Object.values(counts)) {
    if (count === 2) {
      pairs++;
    }
  }
  return pairs === 3;
}

// Function to check for a tower (4 of a kind and a pair)
function isTower(dice) {
  const counts = {};
  for (let die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }
  const countsArr = Object.values(counts).sort();
  return countsArr.length === 2 && countsArr[0] === 2 && countsArr[1] === 4;
}

// Function to check for Yahtzee (all the same)
function isYahtzee(dice) {
  return dice.every(die => die === dice[0]);
}

// Simulate rolling for Full Straight
let throwsFullStraight = 0;
let foundFullStraight = false;
let diceFullStraight;
while (!foundFullStraight) {
  throwsFullStraight++;
  diceFullStraight = rollDice();
  if (isFullStraight(diceFullStraight)) {
    foundFullStraight = true;
  }
}
printOut(diceFullStraight.join(","));
printOut("Full straight");
printOut("På " + throwsFullStraight + " kast!");
printOut(newLine);

// Simulate rolling for 3 Pairs
let throwsThreePairs = 0;
let foundThreePairs = false;
let diceThreePairs;
while (!foundThreePairs) {
  throwsThreePairs++;
  diceThreePairs = rollDice();
  if (isThreePairs(diceThreePairs)) {
    foundThreePairs = true;
  }
}
printOut(diceThreePairs.join(","));
printOut("3 Par");
printOut("På " + throwsThreePairs + " kast!");
printOut(newLine);

// Simulate rolling for Tower
let throwsTower = 0;
let foundTower = false;
let diceTower;
while (!foundTower) {
  throwsTower++;
  diceTower = rollDice();
  if (isTower(diceTower)) {
    foundTower = true;
  }
}
printOut(diceTower.join(","));
printOut("Tårn");
printOut("På " + throwsTower + " kast!");
printOut(newLine);

// Simulate rolling for Yahtzee
let throwsYahtzee = 0;
let foundYahtzee = false;
let diceYahtzee;
while (!foundYahtzee) {
  throwsYahtzee++;
  diceYahtzee = rollDice();
  if (isYahtzee(diceYahtzee)) {
    foundYahtzee = true;
  }
}
printOut(diceYahtzee.join(","));
printOut("Yatzy!");
printOut("På " + throwsYahtzee + " kast!");
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
