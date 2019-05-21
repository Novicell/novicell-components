# novicell-components
Raw Fractal components, no Fractal and (some) Netlify build logic

## What are the build files, and what do they do?
The following is a list of build files and directories, and what they are responsible for:
* Assets
  * This directory contains the assets used by the different components, such as logos, fonts and some images.
* master_modules
  * If you create new directories, you can import the neccesary js in /master_modules/app.js and the same for css in /master_modules/master.css
* tmp_src
  * This is a temporary folder which is used in the Netlify build process to clone the frontend repository into it
* build.sh
  * This is the heart of the build process. It contains all the logic related to building and merging this component repository with the frontend repository. Please refer to comments in the file itself for explanations of each step.
* component_dependencies.json
  * If you create a component that requires an external module, you must add it to this file.
* copyDependencies.js
  * This node script makes sure the dependencies listed in component_dependencies.json are installed in the Netlify build process
* netlify.toml
 * This toml file sets the base path and published path when building on Netlify - it also points to the build.sh script

## How do I add my new component to this repository?
Let's take the example of the molecule "box-image-duotone" located in the /02-molecules/box/ directory.

Besides the .hbs and config.json files, the molecule requires both a .css and .js files. However, the molecule does not require an external dependency - but for the sake of demonstration, let's assume the .js file had "import AOS from 'aos'" in it, thus making box-image-duotone require AOS.


Do the following:
1. Add the following to /master_modules/master.css:
```css
@import '../02-molecules/box/box-image-duotone/box-image-duotone.css';
```
2. Add the following to /master_modules/app.js:
```javascript
import '../02-molecules/box/box-image-duotone/box-image-duotone';
```
3. Add the external dependencies of the box-image-duotone.js in component_dependencies.json: 
```json
"aos": "2.3.4"
```
 If the dependency is the last on the list, remember to include a trailing comma as such:
```json
"aos": "2.3.4",
```
 
