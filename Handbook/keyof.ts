/* eslint-disable @typescript-eslint/no-unused-vars */
// keyof TYPE OPERATOR

type NewType01 =  {
    a: number,
    b: number,
} 

type NewType02 = keyof NewType01;

const newVar01: NewType02 = "a";
const newVar02: NewType02 = "b";
// const newVar03: NewType02 = "c"; c is not key of type
const newVar04: "a"| "b"  = "a"; // similar type annotation with keyof

// INDEXED ACCESS TYPES
type NewType03 = {
    a: number,
    b: string,
    c: boolean,
} 

type NewType04 = NewType03["a"]; //number
type NewType05 = NewType03["b"|"c"]; // string|boolean 
type NewType06 = NewType03["a"]; //number

const arr01 = [
   {a: 1, b: "2", c: true},
   {a: 1, b: "2", c: false},
   {a: 1, b: "2", c: false}, 
];

type NewType07 = typeof arr01[number]; 

export default {} ;