//Example Of If and Else
const flag=true
if(!flag)
{
    console.log("Condition Satisfied")
}
else
{
    console.log(flag)
    console.log("Condition Not SatisFied")
}

//Example of While
let i = 0
while(i<10)
{
i++
console.log(i)
}

//Example of For Loop
console.log("***************FOR LOOP***************")
for(let i=0;i<5;i++)
{
    console.log(i)
}

//With the Help of for Loop print all the Values that are divisible by 2 and 5
console.log("***************Number That are divided by 2 and 5***************")
for(let i=1;i<=100;i++)
{
    if(i%2==0 && i%5==0)
    {
        console.log(i)
    }
}

//Pick first 3 Number that are divisible by 2 and 5 from 1 to 100

console.log("***************First 3 Number That are divided by 2 and 5 between 1 and 100***************")
let n=0;
for(let i=1;i<=100;i++)
{
    if(i%2==0 && i%5==0)
    {
        n++
        console.log(i)
        if(n==3)
            break
    }
}

//Another Exapmple of how to stop infinite loop and will execute only one time.

let required=true
while(required)
{
    console.log(required)
    required=false
}