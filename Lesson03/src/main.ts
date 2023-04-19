let stringArr = ['one', 'hey', 'Jarek'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1999, true];

stringArr[0] = 'john';

stringArr.push('42');

guitars[0] = 1984;
guitars.unshift('Jim');

let test = [];
let bands: string[] = [];
bands.push('van halaen');

//Tuple

let myTuple = ([string, number, boolean] = ['Dave', 42, true]);

let mixed = ['Jonh', 1, false];

myTuple[3] = 42; //error tuple can have only 3 elements in this example
