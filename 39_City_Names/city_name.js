"use strict";
// City Names: Write a function called city_country() that takes in the name
//  of a city and its country. The function should return a string formatted
//   like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the
//  value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Gaza City', 'Phalastin'));
console.log(city_country('Shanghai', 'China'));
