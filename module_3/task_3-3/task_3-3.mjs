"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

let dateNow = new Date(Date.now());
let result = dateNow.toLocaleString("no-NB", options);
printOut(result);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    let result2 = dateNow.toLocaleString("no-NB", options);

    result2 += "<br>";

    const launchDate = new Date(Date.UTC(2025, 4, 14, 0, 0, 0));
    let diffInTime = launchDate.getTime() - dateNow.getTime();
    let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

    result2 += "It is " + diffInDays + " days until the release of PlayStation 5!!!";
printOut(result2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printresult(radius) {
const PI = Math.PI;
const diameter = 2 * radius;
const circumference = 2 * PI * radius;
const area = PI * (radius * radius);

let result = "Diameter is " + diameter + "<br>";
    result += "Circumference is " + circumference.toFixed(2) + "<br>";
    result += "Area is " + area.toFixed(2);

    return result;
}
let result3 = printresult(5);
printOut(result3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleresult(width, height) {
    const circumference = width * 2 + height * 2;
    const area = width * height;

    let result = "Rectangle width: " + width + ", height: " + height + "<br>";
    result += "Circumference is " + circumference.toFixed(2) + "<br>";
    result += "Area is " + area.toFixed(2);

    return result;
}
let result4 = rectangleresult(6, 2);
printOut(result4);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const temperatureTypes = {Celsius: 1, Fahrenheit: 2, Kelvin: 3};
function convertTemperature(temperature, temperatureType) {
    let result = "";
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    if (temperatureType === temperatureTypes.Celsius) {
        result += "Convert " + temperature + " Celsius";
        celsius = temperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 237.15;
    } else if (temperatureType === temperatureTypes.Fahrenheit) {
        result += "Convert " + temperature + " Fahrenheit";
        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 237.15;
    } else if (temperatureType === temperatureTypes.Kelvin) {
        result += "Convert " + temperature + " Kelvin";
        celsius = temperature - 237.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
    }

    result += "<br>";
    result += "Celsius = " + celsius.toFixed(0) + "<br>";
    result += "Fahrenheit = " + fahrenheit.toFixed(0) + "<br>";
    result += "Kelvin = " + kelvin.toFixed(0);
    result += "<br>";
    return result;
}
let result5 = convertTemperature(34, temperatureTypes.Celsius) + "<br>";
    result5 += convertTemperature(23, temperatureTypes.Fahrenheit) + "<br>";
    result5 += convertTemperature(47, temperatureTypes.Kelvin) + "<br>";
printOut(result5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculatenetprice(price, taxGroup) {
    let result = "";
    let net = NaN;
    let taxGroupUpper = taxGroup.toUpperCase();
    let vat = NaN;

    result = "taxGroup = " + taxGroupUpper + "<br>";

    if(taxGroupUpper === "NORMAL") {
        vat = 25;
    } else if(taxGroupUpper === "FOOD") {
        vat = 15;
    } else if(taxGroupUpper === "HOTEL" ||  taxGroupUpper === "TRANSPORT" || taxGroupUpper === "CINEMA") {
        vat = 10;
    }

    if(isNaN(vat)) {
        result += "Unknown VAT group!";
    } else {
        net = (100 * price) / (vat + 100);
        result += price.toFixed(2) + " is " + net.toFixed(2) + " without tax" + "<br>";
    }

    return result;
}
let result6 = calculatenetprice(200, "normal") + "<br>";
    result6 += calculatenetprice(400, "food") + "<br>";
    result6 += calculatenetprice(120, "cinema") + "<br>";
    result6 += calculatenetprice(1000, "goblins") + "<br>";
printOut(result6);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function returnSpeedDistanceTime(speed, distance, time) {
    let result = "<br>";

    if(speed == null) {
        if(distance == null || time == null) {
            speed = NaN;
        } else {
            speed = distance / time;
        }
    } else if(distance == null) {
        if(speed == null || time == null) {
            distance = NaN;
        } else {
            distance = speed * time;
        }
    } else if(time == null) {
        if(speed == null || distance == null) {
            time = NaN;
        } else {
            time = distance / speed;
        }
    } else {
        result += " Invalid input" + "<br>";
    }

    if(time != null) {
        time = time.toFixed(2);
    }

    result += "Speed: " + speed + " km/h <br>";
    result += "Distance: " + distance + " km<br>";
    result += "Time: " + time + " h<br>";

    return result;
}
let result7 = ""
let speed = NaN;
let distance = NaN;
let time = NaN;

    result7 += returnSpeedDistanceTime(75, 50, undefined)+ "<br>";
    result7 += returnSpeedDistanceTime(60, undefined, 2)+ "<br>";
    result7 += returnSpeedDistanceTime(undefined, 105, 1.50)+ "<br>";
    result7 += returnSpeedDistanceTime(undefined, 105, undefined)+ "<br>";
printOut(result7);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function returnString(text, size, character, insertion) {
    let result;

    if (insertion) {
        result = character.repeat(size) + text;
    } else {
        result = text + character.repeat(size);
    }

    return result;
}
let result8 = returnString("This is my text", 60, "W", false);
    result8 += "<br>"
    result8 += returnString("This is my text", 60, "W", true);
printOut(result8);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    let result = "";
    let ok = false;

    do {
        let sumLeft = 0;
        let resLeft = "";
        for (let left = 0; left < line + 1; left++) {
            sumLeft += op;
            resLeft += op + " ";
            op++;
        }

        let sumRight = 0;
        let resRight = "";
        for (let right = 0; right < line; right++) {
            sumRight += op;
            resRight += op + " ";
            op++;
        }

        if (sumLeft !== sumRight) {
            ok = false;
        }else{
            ok = true;
        }
        line++;

        result += resLeft + " = " + resRight; 
        result += "<br>";

        if(line > 200){
            result += "Mathematics is Fun!";
            break;
        }

    } while (ok);

    return result;
}
function testIfMathIsFun2() {
    let op = 1;
    let line = 1;
    let result = "";
    let ok = false;



    do {
        let sizeLeft = 180 / 2;
        let sizeRight = 180 / 2;

        let sumLeft = 0;
        let resLeft = "";
        for (let left = 0; left < line + 1; left++) {
            sumLeft += op;
            resLeft += op + "&nbsp";
            op++;
        }

        let sumRight = 0;
        let resRight = "";
        for (let right = 0; right < line; right++) {
            sumRight += op;
            resRight += op + "&nbsp";
            op++;
        }

        if (sumLeft !== sumRight) {
            ok = false;
        }else{
            ok = true;
        }
        line++;

        result += returnString(resLeft, sizeLeft - resLeft.length, "&nbsp", false) + " = " + returnString(resRight, sizeRight - resRight.length, "&nbsp", true); 
        result += "<br>";

        if(line > 10){
            result += "Mathematics is Fun!";
            break;
        }

    } while (ok);

    return result;
}

let result9 = testIfMathIsFun2();
printOut(result9);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
let number = 9;
    let result10 = "Factorial (" + number + ") is " + factorial(number);
printOut(result10);
printOut(newLine);
