//Write a program that creates Objects containing these items.


interface person {
    Name :string,
    Age :number,
    Nationality :string,
    Student :Boolean,

}
// person object.
let person:person = {
    Name : 'Sheikh M.Hammad',
    Age : 21 ,
    Nationality : 'Pakistan' ,
    Student : true ,
}

//Print a person object.
console.log(person);


// car object.
interface car {
    maker : string,
    color : string,
    automatic : boolean,
}

let car :car = {
    maker : 'Honda',
    color : 'White',
    automatic : true,
}

//Print a car object.
console.log(car);
