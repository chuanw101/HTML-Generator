// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    { type: "input", name: "name", message: "What is your name?" },
    { type: "input", name: "bio", message: "Introduce your self" },
    { type: "input", name: "email", message: "What is your email?" },
    { type: "input", name: "linkedin", message: "What is your LinkedIn url?" },
    { type: "input", name: "github", message: "What is your GitHub url?" },
];

// Create a function to write HTML file
function writeToFile(fileName, data) {
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <header class="container-fluid text-center pt-3 pb-4 bg-dark text-primary">
        <h1>${data.name}</h1>
    </header>
    <section class="row mt-3">
        <h2 class="col-3 text-primary text-end">Bio:</h1>
        <p class="col-7 text-info mt-1">${data.bio}</p>
    </section>
    <section class="row">
        <h2 class="col-3 text-primary text-end">Contact:</h1>
        <div class="col-7 d-flex justify-content-between mt-1">
            <a class="link-info" href= "mailto:${data.email}">Email</a>
            <a class="link-info" href="${data.linkedin}" target="_blank">LinkedIn</a>
            <a class="link-info" href="${data.github}" target="_blank">GitHub</a>
        </div>
    </section>
</body>
</html>`

    fs.writeFile(`./${fileName}`, content, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((res) => {
            writeToFile("temp.html", res);
        });
}

// Function call to initialize app
init();