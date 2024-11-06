// Function
function printHeart() {
    console.log("<3");
}
printHeart();

// Function dan Parameter
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(9, 9)); // Output: 81
console.log(multiply(5, 4)); // Output: 20

// Scoop
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();

// Arrow
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna")); 
