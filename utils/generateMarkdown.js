// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[[License: ${license}](https://opensource.org/licenses/${license})]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, test, question1, quesion2}) {
  return `${renderLicenseBadge(license)}
  # ${title}

  ## Description
  ${description}

  ## Table of Contents 
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Test](#test)\n
  [Question](#question)\n
  [license](#license)\n

  ## Insatallation
  ${installation}

  ## Usage
  ${usage}

  ## Test
  ${test}

  ## Questions
  Github: ${question1}
  Email: ${quesion2}

  ## License
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
