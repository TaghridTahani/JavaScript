console.log("Data Type and primitive Data Type");
let a = null;
let b = 435;
let c = true; //can also be false
let d = BigInt("567");
let e = "Preeti";
let f = Symbol("I am a nice girl");
let g = undefined; // let g similar
console.log(a, b, c, d, e);
console.log(typeof f);

//non primitive data type - objects in JS
const item = {
  "harry": true,
  " lam ": false,
  "khush ": 67,
  " bush ": undefined,
}
console.log(item["harry"])
