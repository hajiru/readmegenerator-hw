// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Required functions from generateMarkdown.js file
const generateMark = require('./js/generateMarkdown')

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
    name: 'installation',
    message: 'What are the install procedures for you project?'
  },
  {
    // Usage
    type: 'input',
    name: 'usage',
    message: 'What is the usage information of your project?'
  },
  {
    // Contributions
    type: 'input',
    name: 'contribution',
    message: 'What is the contributions guidelines of your project?'
  },
  {
    // Testing
    type: 'input',
    name: 'tests',
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Created README file');
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  const data = await inquirer.prompt(questions);
  console.log(data.license)
  const markDown = generateMark.generateMarkdown(data);
  writeToFile('README.md', markDown);
}

// Function call to initialize app
init();
