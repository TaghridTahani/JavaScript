// let a = prompt("Hey whats your age? ") //alert bole, prompt asks!
// console.log(typeof a)
// a= Number.parseInt(a) //TYpecasting 
// console.log(typeof a)
// if(a>18){
//     alert("This is a valid age")
// }
// else if(a>0 && a<18){
//     alert("you are a child ")
//     console.log("block the user")

// }

// homw work - explore switch statement and write a basic program in the comments 

let a = prompt("what your position in the competition? ")
a=Number.parseInt(a)
switch(a){
    case 1: 
        alert("Wow! what a performance")
        break;
    case 2: 
        alert("very good!")
        break;
    case 3: 
        alert("Good")
        break;
    default: alert("Keep trying")
    
}

let an = prompt("an?")
an=Number.parseInt(an)
console.log("you can", an<18? "not drive":"drive") 