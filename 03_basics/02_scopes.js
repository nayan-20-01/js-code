
a=200
if(true){
    let a =10
const b= 20
var c= 30
d =40

}
console.log(a);
//console.log(b);error
console.log(c);
console.log(d);


function one(){
    const user="nayan"

    function two(){
        const website="YT"
        console.log(user);
        
    }
    //console.log(website);error
    two()

}
one()

//++++++nxxhbx+++++++++
addone(5)
function addone(num){
    return num +1
}


addtwo(2)//error
const addtwo= function(num){
    return num +2
}

addtwo(2)