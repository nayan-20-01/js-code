const myArr=[1,2,3,4, true, "nayan"] //resizable
//copy in array are shallow copy
console.log(myArr)
const arr =new Array(1,2,3,4)

//ARRAY METHOD
myArr.push(6)
myArr.push(7)
myArr.pop()
//myArr.unshift(0)//to add at start
myArr.shift()


console.log(myArr)
console.log(myArr.includes(6))//gives answer in T or F(boolean)
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

const newA=myArr.join()//adds array into stribg

console.log(typeof newA)
console.log(newA)

//slice, splice
 
console.log("A ", myArr)
const myn1= myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2= myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr)