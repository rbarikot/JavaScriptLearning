var a=3
console.log(a)
var a=4
console.log(a)
//let a=3
//console.log(a) // It won't allow and will throw error

let b=5
console.log(b)
b=6
console.log(b)

//Generally from above example it's clear we can't have another varibale if let is assigned to that like "let a" is decleared we can't
//have another a assigned to let or var. but value of a can be updatated
//Similarly if we have something " var a" then we can declare another " var a" with same value and different value. 
//but if "var a" is present then we can't have " let a" it will throw run time error

//Now Let's move to another example with Function and see the difference

//var --> global level /functional level
//let -->global level/block level

let greet="evening"
let abc="test"
var xyz="Variable"

if(1==1)
{
    let greet="morning"
    console.log(greet) //Morning
    console.log(abc) //test
    var xyz="Variable Test"
    console.log(xyz)//variable Test
}
console.log(greet) //evening
console.log(abc)//test
console.log(xyz)//Variable Test
function printal()
{
    let greet="afternoon"
    console.log(greet)//afternoon
    console.log(abc)//test
    var xyz="Variable Test2"
    console.log(xyz)//Variable Test2
}
printal()