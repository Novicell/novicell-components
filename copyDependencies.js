let exec = require('child_process').exec;
let componentDependencies = require("./component_dependencies.json");
let keys = Object.keys(componentDependencies.dependencies);
let npm = require('npm');
console.log(keys)

keys.forEach((key) => {    
    npm.load(function (err) {
        // handle errors
        if (err) {
            console.log(err)
        };
        // install module ffi
        npm.commands.install([`${key}`], function (er, data) {
            if(er){
                console.log(er)
            }
            console.log(data)
            // log errors or data
        });

        npm.on('log', function (message) {
            // log installation progress
            console.log(message);
        });
    });
});











// Run npm install for each key (key is dependency name, I.E "novicell-sprite-scroller")
// keys.forEach((key)=>{
//     child = exec(`npm install ${key}`).stderr.pipe(process.stderr);
// });