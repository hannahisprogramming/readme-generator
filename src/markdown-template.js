//create section with project details
const generateProject = questions => {
  return `
# Title: ${questions.title}
## Table of Contents

[Description](#description)

[Links](#links)

[Installation](#installation)

[Usage](#usage)

[Licenses](#licenses)

[Contribution](#contribution)

[Contact](#contact)

### Description
${questions.description}
Picture of the application:

### Links
Github Link: ${questions.githubLink}
Deployed Application: ${questions.deployedLink}

### Installation
${questions.installation}

### Usage
${questions.usage}

### Licenses
![GitHub license](https://img.shields.io/badge/license-${questions.license}-blue.svg)

### Contribution
${questions.contribution}

### Contact
Developer's Name: ${questions.name}
Developer's Profile (https://github.com/${questions.github})
Developer's Email: <${questions.email}>
  `;
};

module.exports = generateProject;
