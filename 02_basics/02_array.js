const marvel =["thor", "iron","spider"]
const dc=["super", "flash", "bat"]

// marvel.push(dc)//array in array
const allhero=marvel.concat(dc)//reurns a new array
console.log(allhero)
const all_new=[...marvel, ...dc]
console.log(all_new)

const arr1=[1,2,3,[4,5],6,7,[4,7,[2,3]]]
const usableArr=arr1.flat(Infinity)
console.log(arr1)
console.log(usableArr)

console.log(Array.isArray("Nayan"))
console.log(Array.from("nayan"))
console.log(Array.from({name: "nayan"}))//interesting- returns empty array because dony knoq what to do

let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1, sc2, sc3 ))