//Immmediately Invoked Function  Expression
// function chai(){
//     console.log(`db connected`);
    
// }
(function chai(){//named iife
    console.log(`db connected`);
    
})();//iife used 1:to execute func immediately
//sometimes global scope causes polution
//add semicolon in end
((name)=>{
    console.log(`db conn two ${name}`);
    
})('nina')
