//Understanding Function is nothing but block of Code
//It should start with keyword function
//Declaration Method
function add(a,b)
{
    return a+b
}

//Way to Call the Function
var sum=add(2,3)
console.log(sum)

//There is something called Anonymous Function i.e. They don't have name of the function

//1st way to have this 
let sumtotal=function(a,b)
{
    return a+b
}
console.log(sumtotal(2,4))

//2nd Way of Declaring Anonymous Function

let sumofInteger=(c,d)=>c+d
console.log(sumofInteger(2,4))

