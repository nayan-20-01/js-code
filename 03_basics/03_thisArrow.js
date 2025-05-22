const user={
    usern:"nayan",
    price:99,

    welcome: function(){
        console.log(`${this.usern} welcome to website`);
        //console.log(this);
        
    }

}
user.welcome()
user.usern="nina"
user.welcome()
console.log(this);
//this is used for current context in object
// function chia(){
//     let username="nina"
//     console.log(this.username);//doest work
    
// }
// chia()

const chai = () => {   //arrow func
    let username ="nayan"
    console.log(this);
    
}
chai()

// arrow func: () => {}

// const addTwo =(num1, num2) =>{
//     return num1+num2
// }

const addTwo =(num1, num2) => num1+num2 //return not required


console.log(addTwo(2,6));
