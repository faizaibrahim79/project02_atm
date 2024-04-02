#! /usr/bin/env node
import inquirer from "inquirer";
let userName = "Faiza";
let myBalance = 10000;
let myPin = 9856;
let pinAnswers = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);
if (pinAnswers.pin === myPin) {
  console.log(`Welcome ${userName}!!!`);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select a Transaction",
      type: "list",
      choices: ["Balance Inquiry", "Fast Cash", "Cash Withdraw", "Exit"],
    },
  ]);
  if (operationAns.operation === "Balance Inquiry") {
    console.log(`Your account balance is ${10000}`);
  } else if (operationAns.operation === "Fast Cash") {
    let transactionAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please Select an amount",
        type: "list",
        choices: ["500", "1000", "5000", "10000"],
      },
    ]);
    console.log( `Your remaining balance is ${(myBalance -= transactionAns.amount)}`);
  } else if (operationAns.operation === "Cash Withdraw") {
    let withDrawal = await inquirer.prompt([
      {
        name: "cash",
        message: "please enter amount in multiples of Rs.500 or Rs.1000 : Rs.",
        type: "number",
      },
    ]);
    if (withDrawal.cash > myBalance) {
      console.log("Insufficient balance");
    } else {
      console.log(
        `Your remaining balance is ${(myBalance -= withDrawal.cash)}`
      );
    }
  } else if (operationAns.operation === "Exit") {
    console.log(`Thanks for using ATM Made by ${userName}`);
  }
} else {
  console.log("Incorrect pin number");
}
