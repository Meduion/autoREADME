// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let selectedLicense = ``;
  if (license === `Apache License 2.0`) {
    selectedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return selectedLicense;
  }
  if (license === `Boost Software License 1.0`) {
    selectedLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    return selectedLicense;
  }
  if (license === `BSD 2-Clause`) {
    selectedLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    return selectedLicense;
  }
  if (license === `BSD 3-Clause`) {
    selectedLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    return selectedLicense;
  }
  if (license === `Creative Commons Zero v1.0 Universal`) {
    selectedLicense = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    return selectedLicense;
  }
  if (license === `Eclipse Public License 2.0`) {
    selectedLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    return selectedLicense;
  }
  if (license === `GNU GPL v3.0`) {
    selectedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return selectedLicense;
  }
  if (license === `MIT License`) {
    selectedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return selectedLicense;
  }
  if (license === `Mozilla Public License 2.0`) {
    selectedLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    return selectedLicense;
  }
  if (license === `The Unlicense`) {
    selectedLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    return selectedLicense;
  }
  if (license === `None`) {
    selectedLicense = ``;
    return selectedLicense;
  }
}

function includeContents(includeContents) {
  let contents = `## Contents`;
  if (includeContents === false) {
    contents = ``;
  }
  return contents;
}

function includeInstallation(includeInstallation) {
  let installation = `## Installation`;
  if (includeInstallation === false) {
    installation = ``;
  }
  return installation;
}

function includeContributions(includeContributions) {
  let contributions = `## Contributions`;
  if (includeContributions === false) {
    contributions = ``;
  }
  return contributions;
}

function includeTests(includeTests) {
  let tests = `## Tests`;
  if (includeTests === false) {
    tests = ``;
  }
  return tests;
}

function includeQuestions(includeQuestions) {
  let questions = `## Questions`;
if (includeQuestions === false) {
    questions = ``;
  }
  return questions;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ${includeContents(data.includeContents)}

  ${includeInstallation(data.includeInstallation)}

  ${data.installation}

  ## Useage

  ${data.useage}

  ## License

  This project is licensed under ${data.license}. For more information (if applicable), please click the following button to learn more:

  ${renderLicenseBadge(data.license)}

  ${includeContributions(data.includeContributions)}

  ${data.contributions}

  ${includeTests(data.includeTests)}

  ${data.tests}

  ${includeQuestions(data.includeQuestions)}

  https://github.com/${data.username}

  ${data.email}
`;
}



module.exports = generateMarkdown;
