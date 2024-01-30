const a = 3;
const b = "3";
const c = function(a:any,b:any){
    console.log(a+b);
} 

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

const message = "aaa";

console.log(message.toUpperCase());
// console.log(message()); // the type of the message is string not a callable so the result is error

// Typescript and Errors
const obj01 = {
    x :1,
    y:2,
}
// console.log(obj01.z); // the result for JS is undefined
// typescript shows the error before running the code

const func01 = (a: string, b: Date)=>{
    console.log( `${a} - ${b}`  );
}

// func01("aaa",Date()); // error since the Date() is string
func01("aaa", new Date()); // types for function params

// default target  for tsc is es3
