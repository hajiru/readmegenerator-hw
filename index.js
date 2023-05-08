// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    // Project Title
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    // Description
    type: 'input',
    name: 'description',
    message: 'Description of your project?'
  },
  {
    // Install Instructions
    type: 'input',
    name: 'install',
    message: 'What are the install procedures for you project?'
  },
  {
    // Usage
    type: 'input',
    name: 'usage',
    message: 'How would you use your project?'
  },
  {
    // Contributions
    type: 'input',
    name: 'contributions',
    message: 'What is the contributions guidelines of your project?'
  },
  {
    // Testing
    type: 'input',
    name: 'test',
    message: 'How would you test your project?'
  },
  {
    // License
    type: 'list',
    name: 'license',
    message: 'What license does the project use?',
    choices: ['Apache', 'Boost', 'MIT', 'Mozilla']
  },
  {
    // Email
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    // GitHub
    type: 'input',
    name: 'github',
    message: 'What is your github?'
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();