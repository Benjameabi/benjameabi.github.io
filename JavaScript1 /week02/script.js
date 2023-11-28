// Task #1
const message = "Hello World!"
console.log(message);
//Task #2
console.log("I'm awesome");
//Task #3
let x;
console.log("the value of my variable x will be: 5");
console.log(x);
x= 5;
console.log("the value of my variable x will be: 5")
console.log(x)
//Task #4
let y;
console.log("the value of my variable y will be: Shoes");
console.log(y);
y="Shoes";
console.log("the value of my variable y will be: Shoes");
console.log(y);
//Task #5
const z= 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highest=Math.max(z,a);
console.log(highest);
//Task #6
let sneakers= new Array();
console.log("the value of the array will be names of sneakers");
console.log(sneakers);
const wildAnimals=["Tiger","Lion","Monkey","Cow"];
console.log(wildAnimals);
wildAnimals.push("Baby Pig");
console.log(wildAnimals);
//Task #7
let myString = "this is a test"
console.log(myString)
myString.length;
console.log(myString.length);
//Task #8
let c= "John"
console.log(c)
console.log("The type of my variable is string");
let v;
console.log(v)
console.log("The type of my variable is undefined");
let b= null
console.log(b)
console.log("The type of my variable is null");
let n= 56
console.log(n)
console.log("The type of my variable is number");
console.log(typeof c)
console.log(typeof v)
console.log(typeof b)
console.log(typeof n)
if (typeof c === typeof v){
  if (typeof v === typeof b){
    if (typeof b === typeof n){
  console.log("SAME TYPE");
    }
    }
} else {
  console.log("NOT SAME TYPE");
}
//Task #9

//Task #10
const array = [1,2,3,4,G,H,K,J];
// Output [G,H,J,K,1,2,3,4];
let numberArray =[];
let stringArray =[];
array.forEach(element => { 
  if(typeof(element) === "string"){
  stringArray.push(element);
  }
  if(typeof(element) === "number"){
    numberArray.push(element);
  }
});
const array1= stringArray.concat(numberArray);
console.log(numberArray);
console.log(stringArray);
console.log(array1);             
     