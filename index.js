// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
// gets asked title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title",
    },
    {
        type: "input",
        name: "description",
        message: "Description"
    },
    {
        type: "input",
        name: "table of contents",
        message: "Table of Contents",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage",
    },
    {
        //import list of licenses from github (MIT, Apache 2.0, ISC, BSD)
        type: "list",
        name: "license",
        message: "License",
        choices: [
            "MIT",
            "Apache 2.0",
            "ISC",
            "BSD",
        ],
    },
    {
        type: "input",
        name: "contributing",
        messsage: "How to Contribute",
    },
    {
        type: "input",
        name: "test",
        message: "Provide examples on how to run your application",
    },
    {
        type: "input",
        name: "question1",
        message: "Please enter your github username",
    },
    {
        type: "input",
        name: "question2",
        message: "Please enter email on how you can be reached",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // add fs code here to save file
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers)
        writeToFile("my-readme.txt", markdownText)
    });
}

// Function call to initialize app
init();
