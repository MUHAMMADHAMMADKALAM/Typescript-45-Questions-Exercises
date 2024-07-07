"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// let magician :string[] = ['Harry Houdini','David Blaine','Doug Henning','Dai Vernon'];
// function show_magicians(magicians:string[]){
//     magicians.forEach(element =>{
//       console.log(element);
//         })
// }
// show_magicians(magician);
let magician = ['hammad', 'salim', 'fahad', 'ahmed'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
