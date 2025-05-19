//singleton

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"nayan",
    "fullname": "nayan srivastava",//this cannot be accesed by "."
    [mySym]:"myK",
    age: "jaipur",
    emai:"hbfhewhb"
}

console.log(JsUser.emai)
console.log(JsUser["emai"])
console.log(JsUser[mySym])

JsUser.emai="aucna"
//Object.freeze(JsUser)//now value canot be changed
console.log(JsUser)

JsUser.greetings= function(){
    console.log("hello JS user")
}

console.log(JsUser.greetings())//func get executed
console.log(JsUser.greetings)//gets functions reference

JsUser.greetings2= function(){
    console.log(`hello JS user ,${this.name}`)
}

console.log(JsUser.greetings2())