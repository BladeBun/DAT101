"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto",
};

const CurrencyTypes = {
    NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"},
    EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"},
    USD: {value: 0.1091, name: "United States dollar", denomination: "$"},
    GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"},
    INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
    AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"},
    PHP: {value: 6.5189, name: "Filippinske peso", denomination: "₱"},
    SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD: {value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB: {value: 3.3289, name: "Thai baht", denomination: "฿"}
};

class TAccount {
    type;
    balance;
    withdrawCount;
    currencyType;
    constructor(myType) {
        this.type = myType;
        this.balance = 0;
        this.withdrawCount = 0;
        this.currencyType = CurrencyTypes.NOK
    }

    toString() {
        return this.type;
    }

    setType(myType) {
        let output = "Account is changed from " + this.type;
        this.type = myType;
        output += " to " + this.type;
        printOut(output);
    }

    getBalance() {
        return this.balance;
    }

    deposit(aAmount, aType = CurrencyTypes.NOK) {
        const newAmount = aAmount / this.currencyConverter(aType);
        this.balance += newAmount;
        this.withdrawCount = 0;

        let output = "Deposit of " + aAmount.toFixed(2) + " " + aType.name + ", new balance is ";
        output += this.balance.toFixed(2) + this.currencyType.denomination;
        printOut(output);
    }

    withdraw(aAmount, aType = CurrencyTypes.NOK) {
        let canWithdraw = true;
        let output = "";
        const newAmount = aAmount / this.currencyConverter(aType);

        switch (this.type) {
            case AccountType.Savings:
                if (this.withdrawCount < 3) {
                    this.withdrawCount++;
                    canWithdraw = true;
                } else {
                    canWithdraw = false;
                    output = "Cannot withdraw more than 3 times from a " + this.type + " account.";
                }
                break;
            case AccountType.Pension:
                canWithdraw = false;
                output = "Cannot withdraw from a " + this.type + " account.";
                break;
        }

        if (canWithdraw) {
            this.balance -= newAmount;
            output = "Withdrawal of " + aAmount + " " + aType.name + ", new balance is ";
            output += this.balance.toFixed(2) + this.currencyType.denomination;
        }
        printOut(output);
    }

    setCurrencyType(myCurrencyType) {
        if(this.currencyType === myCurrencyType){
            return;
        }

        this.balance = this.balance * this.currencyConverter(myCurrencyType);
        let output = "The account currency has changed from ";
        output += this.currencyType.name + " to " + myCurrencyType.name;
        printOut(output);
        output = "New balance is ";
        output += this.balance.toFixed(2) + myCurrencyType.denomination;
        this.currencyType = myCurrencyType;
        printOut(output);
    }

    currencyConverter(aType) {
        return CurrencyTypes.NOK.value / this.currencyType.value * aType.value;
    }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

printOut(AccountType.Normal + ", " + AccountType.Savings + ", " + AccountType.Credit + ", " + AccountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let myAccount = new TAccount(AccountType.Normal);
printOut("myAccount: " + myAccount.toString());
myAccount.setType(AccountType.Savings);
printOut("myAccount: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is: " + myAccount.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(60);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Savings);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.159, CurrencyTypes.SEK);

printOut(newLine);
