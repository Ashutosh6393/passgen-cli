#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("v8passgen")
  .description("CLI to generate random passwords")
  .version("1.0.0")
  .option("--length -l <number>", "length of passwords to generate", 10)
  .option("--alpha, -a", "password will only contain only contain alphanumeric characters")



program.parse();

const options = program.opts();

if(options.length > 20){
  program.error("Length too long should be less than or equal to 20");
}else{
  let password = "";
  const specialChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if(options.alpha || options.a){
    for(let i = 0; i < options.length; i++){
      password += specialChars[Math.floor(Math.random() * specialChars.length)]
      
    }
  }else{
    for(let i = 0; i < options.length; i++){
      let char = "";
      char = String.fromCharCode(Math.floor(Math.random() * 93) + 33);
      if(char === " "){
        i--;
      }else{
        password += char;
      }
      
    }
  }

  console.log("Your password is", password);
}


