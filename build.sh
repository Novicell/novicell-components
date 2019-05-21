#!/bin/bash
set -e

# Function for cloning the repo and copying it into the src
clone_components()
{
    git clone https://github.com/Henrikschytze/novicell-components.git tmp_src 
    echo "Copying asset folders from tmp_src to ./assets/"
    cp -a -rf ./tmp_src/assets/* ./assets/
    # Remove the temp assets so they're not copied alongside the other contents of the components dir
    rm -rf ./tmp_src/assets/
    # Copy all the remaining contents of tmp_src to ./src/
    cp -a -rf ./tmp_src/* ./src/
    # Copying master.css and app.js from components to main dir
    echo "Overriding inner contents from master_modules/app.js and master.css to src/Modules"
    cat ./tmp_src/master_modules/app.js > ./src/Modules/app.js
    cat ./tmp_src/master_modules/master.css > ./src/Modules/master.css
    copy_dependencies
    rm -rf ./master_modules
    rm -rf ./tmp_src
    echo "Components copied to ./src"
}

copy_dependencies()
{
    echo "Attempting to install the following dependencies... Please wait" 
    # The copyDependencies function rests in the components repo
    # So it is added along with the git clone performed in clone_components
    node ./src/copyDependencies.js 
}

# Function for running actual build commands
build_site()
{ 
    echo "Building site"
    npm run build:prod
    npm run fractal:build 
}

# Run the functions
clone_components
build_site 