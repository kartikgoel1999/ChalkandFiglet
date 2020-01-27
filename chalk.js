const chalk=require("chalk");
const figlet=require("figlet");

console.log(chalk.cyan('I am cyan text'));
console.log(chalk.blue('I am blue text'));
console.log(chalk.red('I am red text'));
console.log(chalk.green(figlet.textSync('Tasker')));
