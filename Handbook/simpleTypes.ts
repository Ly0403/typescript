/* eslint-disable @typescript-eslint/no-unused-vars */
// THREE PRIMITIVES
const a: string = "aaa";
const b: number = 6;
const c: boolean = false;

// Arrays
const arr01:string[] = ["aa", "bb", "cc"];
const arr02: Array<number> = [1, 2, 3];   

// Functions

function func01(a: number, b: number): boolean {
    return a === b;
} 

async function func02(): Promise<void>{
    console.log("I am an async function")
} 

// Union Types
function getID(id: number| string ) {
    return "The id is " + id;
}
console.log(getID(1));
console.log(getID("1"));
// console.log(getID({a:1, b:2})); // not accepting object

function getID02(id: number| string ) {
    // console.log(id.toUpperCase()); // can not find the method for strings since the id can be number or string
    // need narrowing
    if(typeof id === "string") console.log(id.toUpperCase());
    else console.log(id); 
} 

getID02("aaaa"); // AAAA

// Type Aliases
type NewType = {
    a:number,
    b:string,
}; 

// const x : newType = 1; // error
// const xx: newType = {a:1,b:2,} // error b is string

interface NewType02  {
    a: string,
    b: number,
} 

// a new type can be formed with type or interface
// a new property can be added to interface but not type
// type can work with primitives but the interface not

// TYPE ASSERTION
// type casting
// const xxx = document.getElementById("aaa") as HTMLAudioElement;
// const xxxx = <HTMLCanvasElement> document.getElementById("aaaa"); 

// LITERAL TYPES
let lit01 : "aaa"|"bbbb";
// lit01 = "ccc";  // error

const lit02 = 2; // type of lit02 is 2

// null or undefined

function stringOrNull(id?: string | null ) {
    console.log(id!.toUpperCase());
}
stringOrNull("2");