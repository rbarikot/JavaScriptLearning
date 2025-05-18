module.exports=class Person
{
    age=33
    get location()
    {
        return "Canada"
    }

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