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
                console.log('\nPlease enter a title for your project.');
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
                console.log('\nPlease enter a description for your project.');
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
        when: (response) => response.includeContents
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
        when: (response) => response.includeInstallation
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Please provide useage instructions for your project. (Required)',
        validate(value) {
            if (value) {
                return true;
            } else {
                console.log('\nPlease enter useage instructions for your project.');
                return false;
            }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project. (Required)',
        choices: [`Apache License 2.0`, `Boost Software License 1.0`, `BSD 2-Clause`, `BSD 3-Clause`, `Creative Commons Zero v1.0 Universal`, `Eclipse Public License 2.0`, `GNU GPL v3.0`, `MIT License`, `Mozilla Public License 2.0`, `The Unlicense`, `None`],
        validate(value) {
            if (value) {
                return true;
            } else {
                console.log('\nPlease select a license or none.');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'includeContributions',
        message: 'Can other developers contribute to your project?',
        default: false,
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Please let other developers know any guidelines to contributing to your project!',
        when: (response) => response.includeContributions
      },
      {
        type: 'confirm',
        name: 'includeTests',
        message: 'Does your project include any tests?',
        default: false,
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please describe how to use any included tests for your project.',
        when: (response) => response.includeTests
      },
      {
        type: 'confirm',
        name: 'includeQuestions',
        message: 'Would you like to include a Questions sections with information on how other developers can reach out to you?',
        default: false,
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please provide your Github Username',
        when: (response) => response.includeQuestions
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide the email address you wish to be contacted at for any questions.',
        when: (response) => response.includeQuestions
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
