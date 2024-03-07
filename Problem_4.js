//number n is greater than 10. If so, print "Greater than 10", otherwise print "Less than or equal to 10".

const prompt = require("prompt-sync")();

var n;
n= prompt("Enter the number you want :");

if(n>10)
{
    console.log("Number is greater than 10");
}
else{
    console.log("Number is less than 10");
}