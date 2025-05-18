//From ES6 engine class concept have been introduced
//Property inside class need not be in key value pair and can be like with assignment operator (=)
//module.exports will allow to use the class in other class
class Person
{
    firstname="Ranjit"
    lastname="Barik"
    age=33

    //through getter and setter
    get location()
    {
        return 'Canada'
    } 

}

//Now if we have to access the property of class then we have to create an object and then with that 
//Creating an Object can be done through new keyword

//Creating an Object
let ob=new Person()
//Accessing the Property of Class Person
console.log("Accessing Property of Class")
console.log(ob.firstname)
console.log(ob.lastname)
console.log(ob.age)
//When any property assigned with get then it considers as property not as function
console.log(ob.location)

//Let's understand the Concept of Constructor

class Student
{
    age=33

    //Create a constructor through key word constructor
    constructor(firstname,lastname)
    {
        this.firstname=firstname
        this.lastname=lastname
    }
    //Function
    fullname()
    {
        return this.firstname + " " + this.lastname;
    }

}
let st=new Student("Ranjit","Barik")
console.log("Understanding Constructor")
console.log(st.firstname)
console.log("Full Name:", st.fullname());
console.log("Iterating over object properties:");
for(let key in st)
{
    console.log("Key: "+key+" :Value: "+st[key])
}

//Creating Another object
let st1=new Student("Poonam","Barik")
for(let key in st1)
{
    console.log("Key: "+key+" :Value: "+st1[key])
}