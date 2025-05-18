var day="tuesday"
//Same as Array
console.log(typeof(day))

//1> length -->Returns the length of String
console.log("Get the Length of String")
console.log(day.length)

//2>slice --> Returns the substring first parameter is starting index and 2nd is till what with index-1
console.log("Get the Substring of String")
console.log(day.slice(0,4))  //tues
console.log(day.slice(2,6)) //esda
console.log(day.slice(1,4)) //ues
//3>Index -->[]
console.log("Get the Index of String")
console.log(day[1]) //u
//4>split  --> Splitting the stringa nd storing them to array
console.log("Split the String")
var ab=day.split("s")
console.log(ab)
console.log(day)

//5>trim --> Removing white spaces
console.log("Example of trim")
var day=" tuesday is "
console.log(day.length)
var at=day.trim()
console.log(at)
console.log(at.length)

//6>parseInt --> Convert String to Integer and toString --> Convert the Integer to String
console.log("Example of parseInt and toString")
var a="23"
var b="18"
var c=parseInt(a)-parseInt(b)
console.log(c)
console.log(typeof(c))
console.log("converting c to String")
var d=c.toString()
console.log(d)
console.log(typeof(d))

//7>+ --> Concatination 
console.log("Example of +")
var day="tuesday"
var ts=day+"Hellowwee"
console.log(ts)

//8>indexof --> It will return an integer, 1st paremeter is search pattern and 2nd is from which index it will start
console.log("Example of index of")
var day="tuesday"
var ts=day+"Hellowwee"
console.log(ts)
var res=ts.indexOf("day")
console.log(res)//4
var res=ts.indexOf("day",0)
console.log(res)//4
var res=ts.indexOf("day",3)
console.log(res)//4
var res=ts.indexOf("day",5)
console.log(res)//-1

//Write a Program to find the number of time pattern is present

var day="tuesday Hellowwee day"
let value=day.indexOf("day")
var counter=0
while(value!=-1)
{  
    counter++
    value=day.indexOf("day",value+1)
}
console.log("Number of time day present"+counter)

//Write a Re-usable Function for Finding the Index 
function toCountnumberofIndex(a,b)
{
    let value=a.indexOf(b)
    let counter=0
    while(value!=-1)
    {
        counter++
        value=a.indexOf(b,value+1)
    }
    return counter
}

var getIndex=toCountnumberofIndex("tuesday Hellowwee day","day")
console.log("**********Index Found********: "+getIndex)