/* eslint-disable @typescript-eslint/no-unused-vars */
type Type01 = {
    a: number,
    b: number,
} 

type Type02 = Partial<Type01>; // a and b become optional

type Type03 = Required<Type02>; // a and b become mandatory again

type Type04 = "a"| "b";

type Type05 = Record<Type04, Type03>; //{"a" : {a: number, b: number},"b" : {a: number, b: number} } 

export default {} ;