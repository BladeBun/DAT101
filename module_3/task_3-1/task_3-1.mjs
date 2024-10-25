"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 6;
if (wakeUpTime <= 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school");
} else { 
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let currentNumber = 0;
if (Math.sign(currentNumber) === 1) {
  printOut("Positive");
} else if (Math.sign(currentNumber) === -1){ 
  printOut("Negative");
} else {
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor((Math.random() * 8) + 1);
if (imageSize < 4 ) {
  printOut("This image is too small (" + imageSize + "MP)");
} else if (imageSize >= 6 ){
  printOut("Image is too large (" + imageSize + "MP)");
} else {
  printOut("Thank you (" + imageSize + "MP)");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  if (monthName.includes("r")){
    printOut("You must take vitamin D (" + monthName + ")");
  } else {
    printOut("You do not need to take vitamin D (" + monthName + ")");
  }
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
  if (monthName === "January" ||
      monthName === "Mars" ||
      monthName === "Mai" ||
      monthName === "Juli" || 
      monthName === "August" || 
      monthName === "October" || 
      monthName === "December") {
    printOut("There are 31 days in " + monthName);
  } else if (monthName === "February"){
    printOut("There are 28 days in " + monthName);
  } else {
    printOut("There are 30 days in " + monthName);
  }
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || monthName === "April" || monthName === "Mai") {
  printOut("The gallery is closed in " + monthName);
} else {
  printOut("The gallery is open in " + monthName);
}
if (monthName === "April") {
  printOut("Temporary access to the building next door in " + monthName);
}
printOut(newLine);
