
Object.create // constructor method -> forms singleton
const sym = Symbol("Key")
// object literals is used below
const js ={
  name: "vaishali",
  "FullName": "Vishali Raj",
  age: 18,
  location: "elhi",
  isloggedin: false,
  lastloginays: ["monday", "tuesday", "wednesday"],
  [sym]: "key"
                                    
}  

// console.log(js["name"])
// console.log(js.name)
// console.log(js.FullName)
// console.log( typeof js[sym])
// Object.freeze(js)
// js.FullName = "Twinkle"
// console.log( js );



// js.greetings = function () {
//     console.log(`Hello js users ${this.FullName}`);
// }
// console.log(js.greetings());

// singleton
//const tinderUser = new Object();

   const tinderUser = {}
    tinderUser.name = "Twinkle"
    tinderUser.age = "18"
   
// console.log(tinderUser);
const obj1 ={1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
// const obj3 = {obj1, obj2}
//  const obj3 = Object.assign(obj1, obj2)  // Object.assign(targets, sources)=> target has setter function wheras source has getter function . target returns back where we get all the values of sources, sometimes we use it as a object.assign(targets({}, source1,source2)
// console.log(obj3);

 const obj3 =  {...obj1,...obj2} // here spread operator is used
 console.log(obj3);

// whenever data came from database

//  In form of arrays of object

const users = [
  {
     id:"a",
    email :"vvail@gmail.com"
  },
  {
     id:"b",
    email :"Mvail@gmail.com"
  },
   {
     id:"c",
    email :"dvail@gmail.com"
  },
  
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));