//Check if a given number n is positive, negative, or zero. Print the corresponding message.

const prompt = require("prompt-sync")();

var n;
n= prompt("Enter the number you want :");

if(n>0)
     console.log("Number is Positive");
else if(n<0)
    console.log("Number is Negative");
else
     console.log("Number is equal to zero");

