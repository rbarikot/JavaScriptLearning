let productPrices =[10,20,30,50,60,70,80,90]
let discountedPrices=productPrices.map(s=>s-s*0.1)
console.log(discountedPrices)
let affordableProducts =discountedPrices.filter(s=>s<50)
console.log(affordableProducts)
let sum=affordableProducts.reduce((sum,total)=>sum+total,0)
console.log(sum)