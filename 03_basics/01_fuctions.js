

function Myname(){
console.log("H");
console.log("I");
}

//Myname()
// function addTwo(num1, num2){
//     console.log(num1+num2);
// }
function addTwo(num1, num2){
    // let result=num1+num2
    // return result
    return num1+num2
}

const result=addTwo(3,5)
console.log(result);
 
function loginMessage(username="sam"){
    if(!username){
        console.log("please enter user name");
        return

    }
    return `${username} just logged in `
}

console.log(loginMessage());

function calcCart(val1, val2,...numb1){//rest symbol
    return numb1
}

console.log(calcCart(200,500,300,500));

const user1={
    username:"nayan",
    price:199
}

function handle(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`);
    
}
handle(user1)

const myArray=[200,80,50]
function returnsec(getarr){
    return getarr[1]
}

console.log(returnsec(myArray));
