#! /usr/bin/env node

import inquirer from "inquirer";



const randomNumber = Math.floor(Math.random() * 10 + 1 );
// console.log(randomNumber)

// const randomNumber = 13;
const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 10"
},
]);

if(answers.userGuessedNumber === randomNumber){
        console.log("Congratulations! you guessed right number.")
    }
    else {
   console.log ("you guessed wrong number");
        
        }

        
        // console.log(answers);
        // console.log(answers)
        