// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

console.log(`Hello, welcome to autoREADME, an automatic README generator. Please follow the prompts to create your README!`)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate(value) {
            if (value) {
                return true;
            } else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
        console.log(response);
        console.log(`Your README file is being generated.`)
    });
}

// Function call to initialize app
init();
