// Task1

const result = 12 * 8;
console.log(result);

const divisionResult = 10 / 2;
let 11 = divisionResult;
console.log(11);

const num1 = 20;
const num2 = 17;
console.log(num1 + num2); 

const name = 'Parviz';
const surname = 'Garayev';
const year = '27';
const info = name + ' ' + surname + ' ' + year;
console.log(info);

console.log(17 % 12);

let cityName = 'Baku';
cityName = 'Gence'; 
console.log(cityName);

// Task2

let a = 1, b = 1;
let c = ++a; 
let d = b++; 

console.log(c); 
console.log(d); 
console.log(b);
// 2
// 1
// 2

// Task3

let a = 2;      
let x = 1 + (a *= 2);  
console.log(x); // Outputs 9

// Task4

console.log('test1', test); 

{
    let test = "something"; 
    console.log('test2', test); 
}

console.log('test3', test); 



console.log('test1', test); 

{
    var test = "something"; 
    console.log('test2', test); 
}

console.log('test3', test); 


// Task5 

let name = "Ulfat";
console.log(typeof name);

let surname = Zakirli; 
console.log(typeof surname); 

let year = 2000;
console.log(typeof year); 

year = 

year =
"2000";
console.log(typeof year); 

let city;
console.log(typeof city); 

let qualification = null;
console.log(typeof qualification); 

let obj = { name: 'ulfat' };
console.log(typeof obj); 

let arr = ['a', 'b', 'c'];
console.log(typeof arr); 


// Task5

let name = "Ulfat";
console.log(typeof name); 

let surname = Zakirli; 
console.log(typeof surname); 

let year = 2000;
console.log(typeof year); 

year = "2000";
console.log(typeof year); 

let city;
console.log(typeof city); 

let qualification = null;
console.log(typeof qualification); 

let obj = { name: 'ulfat' };
console.log(typeof obj); 

let arr = ['a', 'b', 'c'];
console.log(typeof arr); 


// Task6

const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

const sortedAscending = arr1.slice().sort((a, b) => a - b);


const sortedDescending = arr1.slice().sort((a, b) => b - a);


const minNumber = Math.min(...arr1);


const maxNumber = Math.max(...arr1);


const sum = arr1.reduce((acc, current) => acc + current, 0);


arr1.push(10, 88);


arr1.splice(0, 2);


arr1.unshift(0, 9, 11);


for (let i = 0; i < 4; i++) {
  arr1.shift();
}


console.log("Sorted Ascending:", sortedAscending);
console.log("Sorted Descending:", sortedDescending);
console.log("Minimum Number:", minNumber);
console.log("Maximum Number:", maxNumber);
console.log("Sum of Numbers:", sum);
console.log("Modified arr1:", arr1);


// Task7

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];


console.log(arr2.slice(2, 7)); 


arr2.splice(5, 0, "Rovshen");


arr2.reverse();


arr2.sort();

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}


for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Anar") {
    console.log(arr2[i]);
  }
}


for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "Anar") {
    arr2[i] = "Perviz";
  }
}


console.log(arr2[arr2.length - 2]);

console.log(arr2.length);

'
console.log("Modified arr2:", arr2);


// Task8

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}


// Task9

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];


const result = arr4.map((value) => {
  if (typeof value === 'number') {
    return value + 10;
  } else if (typeof value === 'string') {
    return `${value} is string`;
  } else if (!value) {
    return `falsy value is ${value}`;
  } else {
    return value;
  }
});


const sumOfNumbers = arr4.filter((value) => typeof value === 'number').reduce((acc, current) => acc + current, 0);


const trueCount = arr4.filter((value) => value === true).length;

const stringCount = arr4.filter((value) => typeof value === 'string').length;

const falseCount = arr4.filter((value) => value === false).length;

console.log("Processed Values:", result);
console.log("Sum of Numbers:", sumOfNumbers);
console.log("Count of true values:", trueCount);
console.log("Count of string values:", stringCount);
console.log("Count of false values:", falseCount);



// Task10 



const obj = {
  email: 'ulfat@gmail.com',
  info: {
      gender: 'Male',
      loc: {
          city: "Baku",
          street: 'Nizami 22',
          education: {
              "uni name": "ADNSU",
          }
      }
  }
}

