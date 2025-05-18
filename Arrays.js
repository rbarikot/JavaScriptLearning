//Different Ways to declare Array
var marks=Array(6)
var marks = new Array(20,30,57,68,78,98)
var marks =[20,30,57,68,78,98,95]

//Print Array
console.log(marks)

//Print the Size of Array
console.log("The Size of Array is : "+marks.length)
//Print All the Element Using For Loop
console.log("Print ALl the Element using For Loop")
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}

//Let's begin with Different Functions of Arrays 1>Push --> Enter any element at the end of the Array
console.log("Push Method of Array")
var scores =[20,30,57,68,78,98,95]
scores.push(23)
console.log(scores)

//2>Pop Method --> Delete the element from end
console.log("POP Method of Array")
scores.pop()
console.log(scores)

//3>unshift Method -->Insert Element at the begining of Array
console.log("Unshift Method")
scores.unshift(13)
console.log(scores)

//4>Splice --> Insert at any Index , splice(indexwheretoenter,deleteitem,itemtoenter1,itemtoenter2)
console.log("Example of Splice Method with delete item as 0 and enter of only single item")
var arr=[1,3,4,5]
arr.splice(1,0,2)
console.log(arr) // [1,2,3,4,5]

console.log("Example of Splice Method with delete item as 0 and enter of only multiple  item")
var arr=[1,3,4,5]
arr.splice(1,0,2,6,7) //Delete Item as 0 and index as 1 so before 3 it will try to insers item 2,6,7
console.log(arr) // [1,2,6,7,3,4,5]

console.log("Example of Splice Method with delete item as 1 and enter of only multiple  item")
var arr=[1,3,4,5]
arr.splice(1,1,2,6,7) //Delete Item as 1 and index as 1, So it will try to delete 3 since it's index is 1 then it will try to insers item 2,6,7
console.log(arr) // [1,2,6,7,4,5]

console.log("Example of Splice Method with delete multiple item and enter of only multiple  item")
var arr=[1,3,4,5]
arr.splice(1,2,2,6,7) //Delete Item as 2 and index as 1, So it will try to delete two element 3 and 4 since it's index is 1 then it will try to insers item 2,6,7
console.log(arr) // [1,2,6,7,5]

//5>indexOf --> Get the Index of the Element , if element is present then it will return the index else will return -1
console.log("Example of indexOF Method")
var scores =[20,30,57,68,78,98,95]
console.log(scores.indexOf(78)) //4
console.log(scores.indexOf(100)) //-1

//6>includes --> if element is present then it will return true else will return false
console.log("Example of includes Method")
var scores =[20,30,57,68,78,98,95]
console.log(scores.includes(78))//true
console.log(scores.includes(120))//false

//7>Reverse the Array 
console.log("Example of Reverse Method")
var scores =[20,30,57,68,78,98,95]
console.log(scores.reverse()) //[95, 98, 78, 68,57, 30, 20]
var arr=["hello","world","hklll","ind"]
console.log(arr.reverse()) 
//8>Reduce Method
//write a Program to find the sum of all element of Array
console.log("Traditional Way to find the Sum of All element of Array")
var arr=[1,3,4,5]
var sum=0
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
}
console.log("The Sum of all element is :"+sum)

//Let's modify the program and write using reduce
console.log("Using reduce to find the Sum of All element of Array")
var arr=[1,3,4,5]
let total=arr.reduce((sum,total)=>sum+total,0)
console.log(total)

//9> Filter Method

//Write a Program to Find the Even Element in an Array
console.log("Traditional Way to find All even element of Array")
var arr=[1,3,4,5,6]
var result=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        result.push(arr[i])
    }
}
console.log(result)

console.log("Let's do the same using filter Method")
var arr=[1,3,4,5,6,8]
var result=arr.filter(s=>s%2==0)
console.log(result)

//10 Map Method
//Write a Program to Find the Even Element in an Array and even element should be multipled with 3

console.log("Traditional Way to find All even element of Array and multiply by 3")
var arr=[1,3,4,5,6,8]
var result=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        result.push(arr[i]*3)
    }
}
console.log(result)

console.log("Let's do the same using map Method")
var arr=[1,3,4,5,6,8]
var result=arr.filter(s=>s%2==0).map(s=>s*3)
console.log(result)

//Let's Combine all theree Method Reduce, Filter and Map
console.log("Example of combining all the three Methods")
var arr=[1,3,4,5,6,8]
let results=arr.filter(s=>s%2==0).map(s=>s*3).reduce((sum,total)=>sum+total,0)
console.log(results)

//11 Sort Method
console.log("Sort method")
let fruits =["banana","mango","pomegrante","apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 = [12,3,19,16,14]
console.log(scores1.sort())
console.log(scores1.sort((a,b)=>b-a))

//Code for Sorting the Element in Array
var arr=[1,9,10,5,6,8]
for(var i=0;i<arr.length;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)

//Code For Reversing the Element in Array
console.log("Reversing The Element in Array")
var arr=[1,9,10,5,6,8]
console.log("The Array Before Reversing : "+arr)
var start=0,last=arr.length-1
while(start<last)
{
    var temp=arr[start]
    arr[start]=arr[last]
    arr[last]=temp
    start++
    last--
}
console.log("The Array After Reversing : "+arr)

//Code for Keeping Odd Number to Right and Even Number to Left
console.log("Separating the Odd and Even Element in Array")
var arr=[1,9,10,5,6,8,7,12]
var result=[]
console.log("The Array Before separating: "+arr)
var start=0,last=arr.length-1
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        result.unshift(arr[i])
    }
    else
    {
        result.push(arr[i])
    }
}
console.log(result)

//Code To Move all the Zero to Right with help of 2nd Array 
console.log("Moving all Zero to start")
var arr=[1,9,0,5,6,0,7,12,0]
var result=[]
console.log("The Array Before Moving Zero to Right : "+arr)
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==0)
        {
            result.unshift(arr[i])
        }
        else
        {
            result.push(arr[i])
        }
}
console.log(result)