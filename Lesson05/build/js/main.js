"use strict";
// conver to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // not rorking in tsx/react
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//avoid double assertion in general
10;
// The DOM
const img = document.querySelector('img'); // not null assertion - ! at the end
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
