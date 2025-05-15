//Primitive

// 7 types: String, Number, Boolean, null, undifined, Symbol, BingInt
 const score =100
 const scoreVal =100.3
 const logIn=false
 const temp=null
 let userEmail
 const id=Symbol('123')
 const anid=Symbol('123')
 console.log(id===anid)
const bignum=321651n//after adding n its a BigInt


//Reference(Non primitive)

//Array ,Objects, Fuctions
const heros=["lokso","nsj","njd"]
let myObj={
    nme: "nayan",
    age: 20

}

const myFun= function(){
    console.log("hello");
}

console.log(typeof temp)
console.log(typeof myFun)
console.log(typeof heros)