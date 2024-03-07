//Check if a given number n is even or odd. If n is even, print "Even", otherwise print "Odd".

const prompt = require("prompt-sync")();

var n;
n= prompt("Enter the number you want :");

if((n%2)==0)
console.log("Number is even");
else
    console.log("Number is odd");
