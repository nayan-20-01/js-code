//const tinduser = new Object() singleton object
const tinduser = {}
tinduser.id="123a"
tinduser.name="lol"
tinduser.isloggedIn=false

//console.log(tinduser)

const regUser ={
    name:"msjn@",
    fullname:{
        userFull:{
            first:"nayan",
            last:"srivastava"
        }
    }
}
//console.log(regUser.fullname.userFull.first)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3={obj1, obj2}
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)//first one act as a target rest the source here both will work 
//const obj5 = Object.assign({},obj1,obj2, obj4)

const obj3 ={...obj1, ...obj2}
console.log(obj3)
//console.log(obj5)

const users=[
    {
        id: 1,
        email:"jjabsb"
    },
    {
        id: 1,
        email:"jjabsb"
    },
    {
        id: 1,
        email:"jjabsb"
    },
    {
        id: 1,
        email:"jjabsb"
    }

]

users[1].email
console.log(tinduser);
console.log(Object.keys(tinduser));
console.log(Object.values(tinduser));
console.log(Object.entries(tinduser));//makes array of entries


const course ={
    coursename: "js",
    fees:"999",
    teacher:"hitesh"
    
}

const {teacher} =course

console.log(teacher);


