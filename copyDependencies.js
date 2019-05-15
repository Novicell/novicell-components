let execSync = require('child_process').execSync;
let componentDependencies = require("./component_dependencies.json");
let keys = Object.keys(componentDependencies.dependencies);
console.log(keys)
// Run npm install for each key (key is dependency name, I.E "novicell-sprite-scroller")
keys.forEach((key)=>{
    console.log(`Now installing ${key}`);
    child = execSync(`npm install ${key}`);
});