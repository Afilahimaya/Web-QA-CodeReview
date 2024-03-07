//Print all numbers from 1 to n using a do while loop.


const prompt = require("prompt-sync")();
var n,i=1;
n= prompt("Enter the number you want to print");

do{
    console.log(i);
    i++;
}
while(i<=n);
