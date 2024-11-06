// For Loop
let loop1Output = "";
for (let i = 0; i < 6; i++) {
    loop1Output += "Da ba dee da ba daa<br>";
}
document.getElementById("loop1").innerHTML = loop1Output;

// For Loops
let loop2Output = "";
for (let i = 25; i >= 0; i -= 5) {
    loop2Output += i + "<br>";
}
document.getElementById("loop2").innerHTML = loop2Output;

// Iterating Arrays
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
let loop3Output = "";
for (let i = 0; i < people.length; i++) {
    loop3Output += people[i].toUpperCase() + "<br>";
}
document.getElementById("loop3").innerHTML = loop3Output;
