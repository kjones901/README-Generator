/** @format */

const {prompt} = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown")
const questions = require("./utils/questions");

// This function writes the README file
function writeToFile(input) {
  fs.writeFile("./dist/README.md", generate(input), (err) =>
    err ? console.log(err) : console.log("README Created")
  );
}

// This function initializes the writeToFile funciton
async function init() {
  const answers = await prompt(questions)
  writeToFile(answers)
}

// Function call to initialize app
init();