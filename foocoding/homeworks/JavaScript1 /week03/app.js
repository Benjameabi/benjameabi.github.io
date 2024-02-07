//String and Array challenges
// #1 Strings!

//1.1 Add the string to your file and log it.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
//1.2 Log the length of myString.
console.log(myString.length);
//1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
myString = myString.replaceAll(",", " ");
//1.4 Log myString to see if you succeeded.
console.log(myString);

//#2 Arrays!

//2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
//2.2 Log your new array!
console.log(favoriteAnimals);
//2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");
//2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log("The new value of the array will be ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
//2.5 Log your new array!
console.log(favoriteAnimals);
//2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log("The array has a length of: " + favoriteAnimals.length);
//2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3, 1);
//2.8 Again log your new array.
console.log(favoriteAnimals);
//2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
console.log("We can use 'indexOf' method");
//2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));

//More JavaScript 🎉
//#1 Create a function that takes 3 arguments and returns the sum of the these arguments.
 function sum(argOne,argTwo,argThree){
   return argOne+argTwo+argThree;
 }
console.log(sum(2, 4, 6));
console.log(sum(1, 3, 5));
console.log(sum(10, 20, 30));
//#3 Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color){
  console.log("a "+ color + " car");
}
colorCar("red");
colorCar("white");
//#3 Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let sportShoe = {
  brand: "Nike",
  size: "12",
  color: "Blue"
};
function printObject(info) {
  for (let i in info) {
    console.log(i + ": " + info[i]);
  }
}
printObject(sportShoe);
//#4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
  // Check the code and print the corresponding message
  if (code === 1) {
    console.log('a ' + color + ' car');
  } else if (code === 2) {
    console.log('a ' + color + ' motorbike');
  } else {
    console.log('unknown');
  }
}
vehicleType("blue", 1);
vehicleType("blue", 4);
vehicleType("blue", 2);
//#5 Can you write the following without the if statement, but with just as a single line with console.log(...);?
/*if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}*/
console.log(3 === 3 ? "yes" : "no");
//#6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (age >= 3) {
    if (code === 1) {
      console.log("a " + color + " used car");
    } else if (code === 2) {
      console.log("a " + color + " used motorbike");
    } else {
      console.log("you should enter 1 or 2");
    }
  } else {
    console.log("It's a new vehicle");
  }
}

vehicle("blue", 1, 3);
vehicle("blue", 1, 2);
vehicle("blue", 2, 7);
//#7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = ["car", "motorbike", "caravan", "bike"];
//#8 How do you get the third element from that list?
let thirdVehicle = vehicles[2];
console.log(thirdVehicle);
//#9 Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, age, code) {
  let vehicles = ["car", "motorbike", "caravan", "bike"];

  if (age >= 3) {
    if (code === 1) {
      console.log("a " + color + " used car");
    } else if (code === 2) {
      console.log("a " + color + " used motorbike");
    } else {
      console.log("you should enter 1 or 2");
    }
  } else {
    console.log("It's a new vehicle");
  }
}

vehicle("green", 3, 1);  
vehicle("blue", 1, 5);   
vehicle("white", 2, 4);    
//#10 Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.) Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
function advertisement() {
    let adText = "Amazing Joe's Garage, we service ";
    
    for (let i = 0; i < vehicles.length; i++) {
        adText += vehicles[i] + "s ";
        
        if (i < vehicles.length - 2) {
            adText += ", ";
        } else if (i === vehicles.length - 2) {
            adText += " and ";
        } else {
            adText += ".";
        }
    }
    console.log(adText);
}
advertisement();
//#11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
console.log("Yes, you can add one more vehicle to the list without changing the code structure, you can simply push the new vehicle into the vehicles array");
//#12 Create an empty object.
let food = {};
console.log(food);
//#13 Create an object that contains the teachers that you have had so far for the different modules.
let teachers = {
  teacher1: "Tommy",
  teacher2: "Seif",
  teacher3: "Sahin",
};
console.log(teachers);
//#14 Add a property to the object you just created that contains the languages that they have taught you.
teachers = {
  week01: {
    teacher: "Tommy",
    module: "HTML and CSS"
  },
  week02: {
    teacher: "Seif",
    module: "Git"
  },
  week03: {
    teacher: "Sahin",
    module: "JavaScript"
  }
};
console.log(teachers);
console.log(teachers.week01.teacher);
console.log(teachers.week02.module); 
//#15 Write some code to test two arrays for equality using == and ===. Test the following:
/*
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
*/
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(areArraysEqual(x, y));
console.log(areArraysEqual(x, z));
console.log(areArraysEqual(z, y));

//#16 Take a look at the following code:
/*let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).*/
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log("Initial state:");
console.log("o2:", o2);
console.log("o3:", o3);
console.log("Changing a property in o2 would change the same property in o3, as they share the same reference.");

o2.foo = "baz";
console.log("After changing o2:");
console.log("o2:", o2);
console.log("o3:", o3);
console.log("Changing o1 would not affect o3, as they are stored in different memory locations. o3 references the same object as o2, but has no connection to o1.");

o1.foo = "item";
console.log("After changing o1:");
console.log("o1:", o1);
console.log("o3:", o3);

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log("Yes, the order in which you assign values does matter.It creates a reference relationship between the two variables.");
//#17 What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;
console.log("It returns string because the first typeof check the  datatype of bar while the second one will check the data type of the first outcome. In javascript the outcome 'number' registers at a string data type");

