let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(typeof mydate)

// let mcDate=new Date(2023, 0, 24)
// let mcDate=new Date(2023, 0, 24, 5, 3)
let mcDate=new Date("2023-01-14")//any order is ok
console.log(mcDate.toLocaleString())

let timest= Date.now()
// console.log(timest)
// console.log(mcDate.getTime())
console.log(Math.floor(Date.now()))//in seconds

mcDate.toLocaleString('default',{
    weekday:"long",
})