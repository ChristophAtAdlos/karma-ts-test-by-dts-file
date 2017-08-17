# karma-ts-test-by-dts-file

This is a test project to research how to test mixed projects (projects with both, typescript and js sources with their d.ts definition files) by karma-typescript.  

This project is related to the [karma-typescript#159](https://github.com/monounity/karma-typescript/issues/159) issue.

## The problem  
The bundler from karma-typescript seems not to be able to bundle non transpiled js files. It tries to require the compiled d.ts file, which will be empty after transpilation.

## Solution  
See this [issue comment](https://github.com/monounity/karma-typescript/issues/159#issuecomment-322944328): As long as karma-typescript does not bundle js files, use commonjs as bundler.


## Commands  


**Lint the source code:**  
`grunt lint`

**Compile:**  
`grunt build`

**Run the main script:**  
`node build/main.js`

**Run the tests:**  
`grunt unitTest`