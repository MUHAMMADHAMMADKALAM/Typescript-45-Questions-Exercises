"use strict";
// Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array
// will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of
// the original names and one array with the Great added to each magician’s
// name.
let magician = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicionArray = copyArray(magician);
make_great(copyMagicionArray);
console.log("This is my originol array");
show_magicians(magician);
console.log("This is my modified copy of the array: ");
show_magicians(copyMagicionArray);
