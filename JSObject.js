//Object is Collection of Properties
//Person is the object
//Property are defined in key and Value pair
let person={
    firstname:"Ranjit",
    lastname:"Barik",
    age:33
}

//Now If we want to access the properties of Object same can be done as . operator and also by [] operator
console.log("Fetching the Details of Object through . and []")
console.log(person.firstname)
console.log(person['lastname'])
console.log(person['age'])

//Updating the Object's property can be done by following way
console.log("Updating the Property of Object")
person.firstname="Poonam"
console.log(person.firstname)

//Adding property to the Object
console.log("Creating new Property of Object")
person.gender="male"
console.log(person.gender)

//Deleting Property in Object
console.log("Deleting Property of Object")
delete person.gender
console.log(person.gender) //It will show undefined
person.gender="male"
console.log(person.gender)

//Print all the property of Object
console.log("Print all Property of Object")
console.log(person)

//Check if the property is present or not in the Object
console.log("Check if the Property is present or not")
console.log('gender' in person) //true
delete person.gender
console.log('gender' in person) //false
person.gender="male"
console.log('gender' in person)

//Iterate over all property of Object
console.log("Iterate all property over Object")
for(let key in person)
{
    console.log("Key is : "+key+" :Value is : "+person[key])
}

//Creating a Function Inside Object
console.log("Creating A Function inside Object")
let student={
    firstname:"Ranjit",
    lastname:"Barik",
    age:33,
    fullname:function()
    {
        return this.firstname+this.lastname
    }
}
student.gender="female"
console.log("Accessing the Function")
console.log(student.fullname())
console.log("Iterate all property over Object without Function Implementation")
//Since Student have property along with function so how to iterate only through property
for(let key in student)
{
    if(typeof student[key]!='function')
    {
        console.log("Key is : "+key+" :Value is : "+student[key])
    }
    
}
