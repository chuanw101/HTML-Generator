// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {type: "input", name:"name", message: "What is your name?"},
    {type: "input", name:"bio", message: "Introduce your self"},
    {type: "input", name:"linkedin", message: "What is your LinkedIn url?"},
    {type: "input", name:"github", message: "What is your GitHub url?"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(JSON.stringify(res));
    });
}

// Function call to initialize app
init();