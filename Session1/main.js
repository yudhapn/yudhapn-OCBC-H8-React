//  Variable Declaration
console.log("Variable Declaration");

let playerName = "Budi";
console.log(playerName);
playerName = "Rudi";
console.log(playerName);

// Data Types
console.log("Data Types");

console.log("I" + " love " + "coding");
let kalimat = "This";
kalimat = kalimat + " is";
kalimat += "Javascript";
console.log(kalimat);

let first = "Modern";
let second = "Javascript";
console.log(`${first} ${second}`);

// Array
console.log("Array");
// Deklarasi Array
console.log("Deklarasi Array");
let arr_bil = [1, 2, 3, 4, 5];
let arr_str = ["a", "buku", "bisa juga kalimat"];
let arr_bol = [true, false, false, true];

// Operasi Array - PUSH
console.log("Operasi Array - PUSH");
arr_bil = [10, 29, 2, 3];
console.log(arr_bil);
arr_bil.push(24);
console.log(arr_bil);

// Operasi array - SHIFT
console.log("Operasi array - SHIFT");
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);

// Operasi array - UNSHIFT
console.log("Operasi array - UNSHIFT");
const array2 = [1, 2, 3];
console.log(array2.unshift(4, 5));
console.log(array2);

// Operasi array - SPLICE
console.log("Operasi array - SPLICE");
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);

// Array Multidimensi
console.log("Array Multidimensi");
let arr = [
  [1, 2, 3],
  [7, 3],
  [91, 8, 100, 30],
];

console.log(arr);
arr[0].shift();
console.log(arr);

arr[1].unshift(4, 5);
console.log(arr);

// this Keyword
console.log("this Keyword");

console.log("this global scope:", this);

function whatever() {
  console.log("this reference to function scope:", this);
}

whatever();

class Whatever {
    // private properties
  #abilities = ["attack", "run", "walk"];
  name = "warria";
  class = "warrior";

  show() {
    console.log(this);
  }
}

const warria = new Whatever();
warria.show();

let counter = {
    val: 0,
    increament: function() {
        this.val += 1
    }
}