"use strict";
let personName = "";
personName = prompt("what is your name?") || "";
if (personName !== null && personName !== "") {
    alert(`Hello ${personName}, would you like to learn some Python today?`);
}
else {
    alert("you have fill to your name !");
}
