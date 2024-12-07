"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let output = "";
for (let index = 0; index < numbers.length; index++) {
    output += numbers[index] + " ";
}
printOut(output);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(','));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const hello = "Hei på deg, hvordan har du det?"
let helloArray = hello.split(' ');

helloArray.forEach((word, i) => {
    printOut(i + " " + (i + 1) + " " + word);
});
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls =
    ["Anne",
        "Inger",
        "Kari",
        "Marit",
        "Ingrid",
        "Liv",
        "Eva",
        "Berit",
        "Astrid",
        "Bjørg",
        "Hilde",
        "Anna",
        "Solveig",
        "Marianne",
        "Randi",
        "Ida",
        "Nina",
        "Maria",
        "Elisabeth",
        "Kristin"];

function removeFromArray(myArray, item) {
    const result = myArray.indexOf(item);
    if (result > -1) {
        printOut("Can remove " + " " + item + " from array");
        myArray.splice(result, 1);
    } else {
        printOut("Can not remove " + " " + item + " from array");
    }
}
function findAndRemoveFromArray(myArray, item) {
    let index = -1;
    const result = myArray.find(findName);
    if (result) {
        printOut("Can remove " + " " + item + " from array");
        myArray.splice(index, 1);
    } else {
        printOut("Can not remove " + " " + item + " from array");
    }

    function findName(name, myIndex) {
        index = myIndex;
        return name === item;
    }
}
removeFromArray(girls, "Oscar");
findAndRemoveFromArray(girls, "Ingrid");
printOut(girls.join(", "));

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys =
    [   "Jakob",
        "Lucas",
        "Emil",
        "Oskar",
        "Oliver",
        "William",
        "Filip",
        "Noah",
        "Elias",
        "Isak",
        "Henrik",
        "Aksel",
        "Kasper",
        "Mathias",
        "Jonas",
        "Tobias",
        "Liam",
        "Håkon",
        "Theodor",
        "Magnus"];

const names = girls.concat(boys);
names.forEach((name) => {
    printOut(name);
});
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook{
    title;
    author;
    ISBN;
    constructor(aTitle, aAuthor, aISBN){
        this.title = aTitle;
        this.author = aAuthor;
        this.ISBN = aISBN;
    }

    toString(){
        return this.title + ", " + this.author + ", " + this.ISBN;
    }
}
const books = [
    new TBook("Code Complete", "Steven McConnell", "978-0-7356-1967-8"),
    new TBook("Refactoring", "Martin Fowler", "978-0-201-48567-7"),
    new TBook("Clean Code", "Robert C. Martin", "978-0-13-235088-4")
];
books.forEach(printBook);
function printBook(aBook){
    printOut(aBook.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag"},
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};
const keys = Object.keys(EWeekDays);
const values = Object.values(EWeekDays);

for(let i = 0; i < keys.length; i++){
    let output = "";

    const key = keys[i];
    output = key + ": ";

    const keyObject = EWeekDays[key]; 
    const keyObjectKeys = Object.keys(keyObject); 

    for(let i = 0; i < keyObjectKeys.length; i++){
        const keyObjectKey = keyObjectKeys[i]; 
        const keyObjectValue = keyObject[keyObjectKey]; 
        output += " " + keyObjectKey + ": " + keyObjectValue;
    }
    printOut(output);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = [];

for(let i = 0; i < 35; i++){
    const randomNumber = Math.ceil(Math.random() * 20); 
    randomNumbers.push(randomNumber);
}

printOut("Random numbers: " + randomNumbers.join(", "));

randomNumbers.sort(sortRandomNumbers);
printOut("Stigende rekkefølge: " + randomNumbers.join(", "));

randomNumbers.reverse();
printOut("Synkende rekkefølge: " + randomNumbers.join(", "));

function sortRandomNumbers(aValue1, aValue2){
    return aValue1 - aValue2;
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequent = {};
for(let i = 0; i < randomNumbers.length; i++){
    const value = randomNumbers[i];

    if(frequent[value]) {
        frequent[value]++;
    }else{
        frequent[value] = 1;
    }
}

let frequentKeys = Object.keys(frequent);
frequentKeys.sort(sortFrequent);

function sortFrequent(value1, value2) {
    const frequent1 = frequent[value1];
    const frequent2 = frequent[value2];
    return frequent2 - frequent1;
}

output = ""; 
for(let i = 0; i < frequentKeys.length; i++){
    const frequentKey = frequentKeys[i];
    const frequentValue = frequent[frequentKey];
    output += frequentKey + ": " + frequentValue + ", ";
}
printOut(output);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myTable = [];
for(let row = 0; row < 5; row++){
    const columns = [];

    for(let col = 0; col < 9; col++){
        const cell = + row + ", " + col;
        columns.push(cell);
    }

    myTable.push(columns);
}

output = "";
for(let row = 0; row < myTable.length; row++){
    const columns = myTable[row];

    for(let col = 0; col < columns.length; col++){
        const cell = columns[col];
        output += "[" + cell + "]";
    }
    printOut(output);
    output = "";
}
printOut(newLine);
