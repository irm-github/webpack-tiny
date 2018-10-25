var program = require('commander');
 
program
  .option('-e, --env [env]', 'Indicate the env', 'prd')
  .parse(process.argv);

console.log(program.env);  
 