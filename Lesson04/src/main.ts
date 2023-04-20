// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArr;
};

type UserId = stringOrNumber;

//Literal types
let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';

//Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (messege: any): void => {
  console.log(messege);
};

logMsg('Hello!!');
logMsg(add(2, 3));
