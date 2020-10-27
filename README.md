# Typescript-2020-0ct-25

## typescript-project-setup-for-learning-purpose

steps:
 - type `` npm init -y ``
  
 - give project name like ``typescript-learning `` in package json file but it should not be `` typescript `` in package.json file
  
 - type `` npm i --save-dev -E typescript `` in terminal. This will install latest typescript (currently 4.0.5) in node modules_folder. `` E `` indicates Exact version because range versions are evil.
  
 - create directory `` src `` in root and crate typescript file `` main.ts `` in src folder
  
 - type some code in typescript file(main.ts) ``` 
  let fname: string = "hello wao";
console.log(fname); ```


- in order to run ts file, first we need to compile into js because browser don't understand typescript. so to do, in package.json add `` build: "tsc" `` which is typescript compilation(tsc) in scripts. check package.json file, you'll understand

- run `` npm run build `` got error

- then run `` tsc ts-file-name ``
  
- in this project go to src folder `` cd src `` then run ``tsc main.ts`` and to see output, install node type definition package `` npm i --save-dev -E @types/node `` then type `` node main.ts `` in terminal to see output in terminal.  If you still get error then create tsconfig.json
  
- create tsconfig.json file in root directory, paste all things from tsconfig.json file

- type `` npm run build `` to generate compiled js code in dist folder
  
- to see output in browser create index.html file in public directory and in html file link js file from generated dist folder.open html file in browser to see output

  
- want to track changes add `` watch: true `` in tsconfig file
  
- want to publish code in github make sure you create ``gitignore file`` to exclude node_modules folder