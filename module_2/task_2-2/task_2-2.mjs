"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
const NEWLine = newLine;

	/* Task 1*/
	printOut("--- Task 1 ----------------------------------------------------------------------------------------------");
	
	/* Put your code below here!*/
let Regnestykke = 2 + 3 * (2-4) * 6;
let txtPrintValue = Regnestykke + NEWLine;
	printOut(txtPrintValue + NEWLine);
	printOut(" ");

	/* Task 2*/
	printOut("--- Task 2 ----------------------------------------------------------------------------------------------");
	let Regnestykke2 = ((25*1000)+(34*10))/25.4;
	txtPrintValue = Regnestykke2.toFixed(2) + NEWLine;
	/* Put your code below here!*/
	printOut(txtPrintValue + NEWLine);
	printOut(" ");

	/* Task 3*/
	printOut("--- Task 3 ----------------------------------------------------------------------------------------------");
	/* Put your code below here!*/
	const secondsInMinute = 60;
	const minutesInHour = 60;
	const hoursInDay = 24;
	const part2_Answer = 
	 (3 * hoursInDay * minutesInHour) +
	 (12 * minutesInHour) +
	 14 +
	 (34 / secondsInMinute);

	printOut("part2_Answer =" + part2_Answer.toString());
	printOut(NEWLine);

	/* Task 4*/
	printOut("--- Task 4 ----------------------------------------------------------------------------------------------");
	/* Put your code below here!*/
	const numberOfMunites = 6322.52;
	let part4_Calc = numberOfMunites / (60 * 24);
	const part4_Days = Math.floor(part4_Calc);
	printOut("Days =" + part4_Days);

	part4_Calc = part4_Calc - part4_Days;
	part4_Calc = part4_Calc * hoursInDay;
	const part4_Hours = Math.floor(part4_Calc);
	printOut("Hours =" + part4_Hours);

	part4_Calc = part4_Calc -part4_Hours;
	part4_Calc = part4_Calc * minutesInHour;
	const part4_Minutes = Math.floor(part4_Calc);
	printOut("Minutues =" + part4_Minutes);

	part4_Calc = part4_Calc - part4_Minutes;
	part4_Calc = part4_Calc * secondsInMinute;
	const part4_Seconds = Math.floor (part4_Calc);
	printOut("Seconds =" + part4_Seconds);
	printOut(NEWLine);

	/* Task 5*/
	printOut("--- Task 5 ----------------------------------------------------------------------------------------------");
	/* Put your code below here!*/
	const NOK = 76 / 8.6;
	const USD = 8.6 / 76;
	let ammountUSD = 54;
	const ammountNOK = Math.round(ammountUSD * NOK);
	printOut(ammountUSD + " dollar is " + ammountNOK + " kroner");
	ammountUSD = Math.round(ammountNOK * USD);
	printOut( ammountNOK + " kroner is " + ammountUSD + " dollars");

	printOut(txtPrintValue + NEWLine);
	printOut(NEWLine);

	/* Task 6*/
	printOut("--- Task 6 ----------------------------------------------------------------------------------------------");
	txtPrintValue = "Your answer!" + NEWLine;
	/* Put your code below here!*/
	let string = "Det er mye mellom himmel og jord som vi ikke forstår.";
	printOut(string + NEWLine);
	printOut("Teksten har "+string.length + " tegn." + NEWLine);
	printOut("Tegnet i posisjon 19 er: "+string.charAt(19)+NEWLine);
	printOut("Delstringen fra 35 og 8 plassen er: " +string.substr(35,8)+NEWLine);
	printOut("Indeksen \"jord\" starter i posisjon: " +string.indexOf("jord"));

	/* Task 7*/
	printOut("--- Task 7 ----------------------------------------------------------------------------------------------");
	txtPrintValue = "Your answer!" + NEWLine;
	/* Put your code below here!*/

	printOut("Er 5 større enn 3: " + (5>3) + NEWLine);
	printOut("Er 7 større eller lik 7: " + (7>=7) + NEWLine);
	printOut("Er \"a\" større enn \"b\": " + ("a">"b")+ NEWLine);
	printOut("Er 1 mindre enn \"a\": " + ((1)<"a")+ NEWLine);
	printOut("Er 2500 mindre enn \"abcd\": " + (("2500")<"abcd")+ NEWLine);
	printOut("\"arne\" er ikke lik \"thomas\": "+ ("arne"!=="thomas") + NEWLine);
	printOut("(2 er lik 5) er sann: " +((2==5)==true) + NEWLine);
	printOut("\"abcd\" er større enn \"bcd\" er usant: " +(("abcd">"bcd")==false) + NEWLine);
	/* Task 8*/
	printOut("--- Task 8 ----------------------------------------------------------------------------------------------");
	txtPrintValue = "Your answer!" + NEWLine;
	/* Put your code below here!*/

	printOut("254 = " + parseInt("254") + NEWLine);
	printOut("57.23 = " + parseFloat("57.23")+ NEWLine);
	printOut("25 krones = " + parseInt("25 krones".match(/\d+/)[0]));

	/* Task 9*/
	printOut("--- Task 9 ----------------------------------------------------------------------------------------------");
	txtPrintValue = "Your answer!" + NEWLine;
	/* Put your code below here!*/

	printOut((Math.floor(Math.random() * 360) + 1) + NEWLine);
	printOut(" ");

	/* Task 10*/
	printOut("--- Task 10 ---------------------------------------------------------------------------------------------");
	txtPrintValue = "Your answer!" + NEWLine;
	/* Put your code below here!*/

	printOut("131 dager er: "+(Math.floor(131/7)) +" uker og:" +(131%7) +" dager.");
