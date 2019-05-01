let exec = require('child_process').exec;
const fs = require("fs");
let componentDependencies = require("./component_dependencies.json");
let frontendPackageJson = require("../package.json");
let keys = Object.keys(componentDependencies.dependencies);
let child;
console.log(keys)
keys.forEach((key)=>{
    child = exec(`npm install ${key}`).stderr.pipe(process.stderr);
});
// frontendPackageJson.dependencies = componentDependencies.dependencies;
// fs.writeFileSync("../package.json", JSON.stringify(frontendPackageJson), (err)=>{
//     console.log(err)
// })

