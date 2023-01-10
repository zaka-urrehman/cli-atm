#! /usr/bin/env node

import inquirer from "inquirer";
import { type } from "os";

const answers = await inquirer.prompt
    ([
        {
            type: "input",
            name: "userid",
            message: "kindly enter your id"
        },
        {
            type: "number",
            name: "userpin",
            message: "kindly enter your pin"
        },
        {
            type: "list",
            name: "accountType",
            choices: ["current", "saving"],
            message: "kindly enter your account type"
        },
        {
            type: "list",
            name: "transactiontype",
            choices: ["fast cash", "withdraw"],
            message: "kindly enter your type of transaction",
            when(answers) {
                return answers.accountType
            }
        },
        {
            type: "list",
            name: "amount",
            choices: [100, 2000, 5000, 8000, 10000],
            message: "enter the amount",
            when(answers) {
                return answers.transactiontype === "fast cash"
            }
        },
        {
            type: "number",
            name: "amount",

            message: "enter your amount",
            when(answers) {
                return answers.transactiontype === "withdraw"
            }
        },

    ])

if (answers.userid && answers.userpin) {
    const balance = 50000;

    console.log(`previous balance = ${balance}`)
    const enteredamount = answers.amount
    if (balance >= enteredamount) {
        const remainingbalance = balance - enteredamount
        console.log(`your remaining balance is ${remainingbalance}`)
    }
    else {
        console.log("insufficent balance")
    }
}