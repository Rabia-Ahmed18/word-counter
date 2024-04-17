#! /usr/bin/env node
// this line is called a shebang ,it tells the os to run the program
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentece to count the word:"
    }
]);
//  (" ") <= this space means to give commas and spaces
const words = answers.Sentence.trim().split(" ");
console.log(words);
//  print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
