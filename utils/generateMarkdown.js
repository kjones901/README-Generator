/** @format */

// This function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT License")
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  else if (license === "Apache License 2.0")
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  else if (license === "GNU General Public License 3.0")
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  else return "";
}

// This function returns the license section and link for the README
function renderLicenseSection(license) {
  if (license === "MIT License")
    return `This project is licensed under the MIT License. This license allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software without restriction, as long as the original copyright notice and license terms are included. For more information,please see the full text of the MIT License.(https://opensource.org/licenses/MIT).`;
  else if (license === "Apache License 2.0")
    return `This project is licensed under the Apache License 2.0. This license allows you to use, copy, modify, and distribute the software under certain conditions. For more information, please see the full text of the Apache License 2.0.(https://www.apache.org/licenses/LICENSE-2.0)`;
  else if (license === "GNU General Public License 3.0")
    return `This project is licensed under the GNU GPL version 3. This license allows you to use, copy, modify, and distribute the software under certain conditions, including that any derivative works or modifications must also be licensed under the same terms. For more information, please see the full text of the GNU GPL version 3.(https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  else return "Unlicensed";
}

// This function generates a markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
    ${data.description}

  ![Alt text](/assets/screenshot.png?raw=true "Screen Shot")
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
      ${data.installation}
  
  ## Usage 
    ${data.usage}
  
  ## Credit
    ${data.credit}
  
  ## License
    ${renderLicenseSection(data.license)}
  
  ## Questions
  - [Github](https://github.com/${data.github})
  - ${data.email}
  `;
}

module.exports = generateMarkdown;
