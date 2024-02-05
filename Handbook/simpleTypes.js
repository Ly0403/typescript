var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-unused-vars */
// THREE PRIMITIVES
const a = "aaa";
const b = 6;
const c = false;
// Arrays
const arr01 = ["aa", "bb", "cc"];
const arr02 = [1, 2, 3];
// Functions
function func01(a, b) {
    return a === b;
}
function func02() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I am an async function");
    });
}
// Union Types
function getID(id) {
    return "The id is " + id;
}
console.log(getID(1));
console.log(getID("1"));
// console.log(getID({a:1, b:2})); // not accepting object
function getID02(id) {
    // console.log(id.toUpperCase()); // can not find the method for strings since the id can be number or string
    // need narrowing
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else
        console.log(id);
}
getID02("aaaa"); // AAAA
// a new type can be formed with type or interface
// a new property can be added to interface but not type
// type can work with primitives but the interface not
// TYPE ASSERTION
// type casting
// const xxx = document.getElementById("aaa") as HTMLAudioElement;
// const xxxx = <HTMLCanvasElement> document.getElementById("aaaa"); 
// LITERAL TYPES
let lit01;
// lit01 = "ccc";  // error
const lit02 = 2; // type of lit02 is 2
// null or undefined
function stringOrNull(id) {
    console.log(id.toUpperCase());
}
stringOrNull("2");
export default {};
