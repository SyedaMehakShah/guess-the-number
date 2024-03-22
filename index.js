#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a  number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you guess the correct number");
}
else {
    console.log("you guess wrong number");
}
