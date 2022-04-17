// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./src/markdown-template.js');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installation is required for your project?',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter installation guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of your project? (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage guidelines!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you build this project with? (Choose one)',
      choices: ["MIT","ISC","APACHE2.0","GPL"]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who is allowed to contribute to your project?',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email for contact',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    }
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, function(err){
    if (err) {
      throw err;
    }
  })
  console.log("markdown generated");
}

// TODO: Create a function to initialize app
function init() {
  questions().then(data => {
    return generateMarkdown(data)
  })
  .then(content => {
    console.log(content);
    writeToFile("README.md", content)
  })
}

// Function call to initialize app
init();
