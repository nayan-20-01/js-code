const uEmail=[]

if (uEmail){
    console.log('got mail');
    
}else{
    console.log('dont have email');
    
  
}
// falsy values:
// false, 0, -0,BigInt 0n, null, undefined, NaN

// truthy values:
// "0",'false'," "//anything in string in truthy
// [], {}, function(){}

// if(uEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj= {}

if (Object.keys(emptyObj).length===0){
    console.log("empty");
    
}

//Nullish coalescing Operator (??): null ,undefined

let val1
//val1=5 ?? 10
val1=null ?? 10
var1=undefined ?? 15
console.log(val1);
console.log(var1);

//Terniary Operator

//condition ? true: false
const price=80
price<=80 ? console.log("less than 80"):console.log("more than 80");


