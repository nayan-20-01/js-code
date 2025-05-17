//Stack(Primitive) ,Heap(Non Primiive)

let myYT="nayan"
let anYT=myYT
anYT="chai"

console.log(anYT)
console.log(myYT)//gets memory in stack

let user= {
    email:"nxshj@.",
    upi:"nsn"
}
let user1=user

user1.email="sxahn@"
console.log(user)
console.log(user1)//here it gets memory in heap 