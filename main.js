#!/usr/bin/env node
//for file exicution
//SHABANG
import inquirer from "inquirer";
let userprompt = await inquirer.prompt({
    name: "usernumber",
    type: "number",
    message: "enter your number between 1 to 10 !"
});
console.log("usernumber", userprompt.usernumber);
let computernumber = Math.floor(Math.random() - 10);
console.log("computernumber", computernumber);
if (userprompt.usernumber === computernumber) {
    console.log("congratulation!you won the game");
}
else {
    console.log("ohh! you lose the game");
}
