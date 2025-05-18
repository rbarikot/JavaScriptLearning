const Person=require('./Test2')
let p1=new Person("RK","KC")
console.log(p1.age)
console.log(p1.firstname)
console.log("Full Name:", p1.fullname())
console.log(p1.location)
console.log("Iterating over object properties:");
for(let key in p1)
{
    console.log("Key: "+key+" :Value: "+p1[key])
}