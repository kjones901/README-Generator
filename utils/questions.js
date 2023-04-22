/** @format */

const questions = [
  { type: "input", name: "title", message: "What is your project title?" },
  { type: "input", name: "description", message: "Describe your project:" },
  {
    type: "input",
    name: "installation",
    message: "What are the steps for installation?",
  },
  { type: "input", name: "usage", message: "How do you use your application?" },
  { type: "input", name: "credit", message: "Give Credit" },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: [
      "No License",
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License 3.0",
    ],
  },
  { type: "input", name: "github", message: "Enter your github username:" },
  { type: "input", name: "email", message: "Enter your email:" },
];

module.exports = questions;
