const name="nayan"
const repo=40
console.log(name+repo+"value")//purana way

console.log(`hello my name is ${name} and repo ${repo}`) ;

const game= new String("shnje-ssw")//another way to define string //isme length or methods milta hai

console.log(game[0])
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('e'))
const newgme=game.substring(0,4)
console.log(newgme)

const anostri=game.slice(-8,4)
console.log(anostri)

const newstring="   hi    "
console.log(newstring)
console.log(newstring.trim())

const url="hysvvyvd sbsb"
console.log(url.replace('ys' , '##'))

console.log(url.includes('ys'))
console.log(url.includes('55'))

//converting on array
console.log(game.split('-'))