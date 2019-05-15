let exec = require('child_process').exec;
let componentDependencies = require("./component_dependencies.json");
let keys = Object.keys(componentDependencies.dependencies);
console.log(keys)
// Run npm install for each key (key is dependency name, I.E "novicell-sprite-scroller")
keys.forEach((key)=>{
    child = execSync(`npm install ${key}`).stderr.pipe(process.stderr);
});