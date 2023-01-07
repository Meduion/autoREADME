// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

console.log(`\nHello, welcome to autoREADME, an automatic README generator. Please follow the prompts to create your README!\n`)
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
        name: 'description',
        message: 'Please provide a description of your project explaining its function, why you built it, and how it functions. (Required)',
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
        type: 'confirm',
        name: 'includeContents',
        message: 'Does your project require a table of contents?',
        default: false,
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Please list the table of Contents for your project.',
        when: ({includeContents}) => {
            if (includeContents) {
                return true;
            }
        }
      },
      {
        type: 'confirm',
        name: 'includeInstallation',
        message: 'Does your project require an installation guide?',
        default: false,
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide a guide to installing your project.',
        when: ({includeInstallation}) => {
            if (includeInstallation) {
                return true;
            }
        }
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Please provide instructions on how to use your project. (Required)',
        validate(value) {
            if (value) {
                return true;
            } else {
                console.log('Please enter useage instructions for your project.');
                return false;
            }
        }
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
