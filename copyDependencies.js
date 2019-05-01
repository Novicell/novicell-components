let exec = require('child_process').exec;
let componentDependencies = require("./component_dependencies.json");
let keys = Object.keys(componentDependencies.dependencies);
let child;
console.log("Installing the following dependencies, please wait...")
console.log(keys)
keys.forEach((key)=>{
    child = exec(`npm install ${key}`);
});

