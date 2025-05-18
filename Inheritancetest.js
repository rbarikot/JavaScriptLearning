const Person=require('./Test2')
class pet extends Person
{
    //If any parent class is having constructor then it's mandate to have constructor in child class
    //use keyword super to get the parent class implementation
    constructor(firstname,lastname)
    {
        
        super(firstname,lastname)
    }
    get location()
    {
        return "India"
    }

}

//No need to create method fullname as it will come as part of inheritance

let ob=new pet("Kuku","kumu")
console.log(ob.fullname())
//Override happens and priority will be given to child class
console.log(ob.location)