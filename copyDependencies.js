const fs = require("fs");
let componentDependencies = require("./component_dependencies.json");
let frontendPackageJson = require("../package.json");
frontendPackageJson.dependencies = componentDependencies.dependencies;
fs.writeFileSync("../package.json", JSON.stringify(frontendPackageJson), (err)=>{
    console.log(err)
})

