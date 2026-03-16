const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("yuana6898@gmail.com"));
// console.log(validator.isMobilePhone("088989531959", "id-ID"));
// console.log(validator.isNumeric("088989531959"));

// console.log(chalk.bgBlue("Hello, World!"));
// console.log(chalk.blackBright.bgBlue("Hello, World!"));
console.log(chalk.italic.blackBright.bgBlue("Hello, World!"));

const pesan = chalk`Cupidatat in adipisicing elit ex {bgBlue dolore} enim aute tempor cillum ut proident voluptate qui anim.`;
console.log(pesan);
