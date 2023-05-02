const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./shape");

class Logo{
    constructor(){
        this.textElement = " "
        this.shapeElement = " "
    }
    render (){
        return
    }
}

// Questions to create logo
const logoQuestions = [
    {
        type:"input",
        name:"text",
        message:"Enter three characters for the logo.",
    },
    {
        type:"input",
        name:"font-color",
        message:"Enter a color keyword or a hexadecimal number.",
    },
    {
        type:"list",
        name:"shape-logo",
        message:"Choose a shape below.",
        choices:["Circle", "Triangle", "Square"],
    },
    {
        type:"input",
        name:"shape-color",
        message:"Enter a color keyword or a hexadecimal number for the shape.",
    },

];

clientShape = answers["shape-logo"];

let clientShapePicked;
if (clientShape === "Circle"){
    clientShapePicked = new Circle();
} else if (clientShape === "Triangle"){
    clientShapePicked = new Triangle();
} else if (clientShape === "Square"){
    clientShapePicked = new Square();
} 

clientShapeColor = answers.shape-color;
clientShapePicked.setColor(clientShapeColor);

// Function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        err ? console.log(err) : console.log("success");
       });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    writeToFile("logo.svg",())
    })
}

// Function call to initialize app
init();