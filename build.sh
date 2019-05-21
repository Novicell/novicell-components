#!/bin/bash
set -e
shopt -s extglob
# Function for cloning the repo and copying it into the src
clone_components()
{
    echo "Moving all the relevant folders into a folder called tmp_src"
    mv -v ./_base/ ./_partials/ ./00-examples/ ./01-atoms/ ./02-molecules/ ./03-organisms/ ./04-pages/ ./assets/ ./master_modules ./tmp_src/ 
    # Cloning into a tmp folder as it is not allowed to clone into current folder if it is not empty
    git clone https://github.com/Novicell/novicell-frontend.git tmp_frontend
    echo "The frontend was cloned into a temporary folder called tmp_frontned"
    echo "Copying the contents of /tmp_frontend/ to ./"
    cp -a -rf ./tmp_frontend/* ./
    echo "NPM installing"
    npm install
    echo "Copying asset folders from tmp_src to ./assets/"
    cp -a -rf ./tmp_src/assets/* ./assets/
    # Remove the temp assets so they're not copied alongside the other contents of the components dir
    echo "Removing temporary assets folder and temporary frontend repo folder"    
    rm -rf ./tmp_src/assets/    
    rm -rf ./tmp_frontend/
    # Copy all the remaining contents of tmp_src to ./src/
    echo "Copying all the remaining files from /tmp_src to ./src"    
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
    node ./copyDependencies.js 
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