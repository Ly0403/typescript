/* eslint-disable @typescript-eslint/no-unused-vars */
type Type01 = {
    a: number,
    b?: number,
    readonly c?: number,
}

function func01( input01: Type01): void {
    console.log(input01.b);
    console.log(input01.c);
    // input01.c = 22; // can not be set
} 

func01({a: 2}); // undefined undefined
func01({a: 2, b: 4}); // 4 undefined

// EXTENDING TYPES
interface Type02 {
    a: number,
    b: number,
} 

interface Type03 extends Type02 {
    c: string,
} 

const address: Type03 = {
    a: 1, b:2, c: "sss",
};

// INTERSECTIONS &
interface Type04 {
    a: number
} 

interface Type05 {
    readonly a: number
} 

// interface Type06 extends Type04, Type05 { // error when two has different
// } 

type Type07 = Type04 & Type05; // intersection can combine them since the properties are different

const var01: Type07 = {
    a: 6,
} 

// GENERIC OBJECT TYPE

interface Type08<T> {
    a: T,
} 

type Type09<T> = {
    a: T,
}  

const var02 : Type08<boolean> = {
    a: false,
} 
const var03 : Type08<string> = {
    a: "false",
} 

// TUPLES
// like arrays but different types and fix length sometimes

type TupleType01 = {
    length: 3,
    0: string,
    1: number,
    2: boolean,
} 

const var04: TupleType01 = ["1",2,false];

type TupleType02 = [string, ...boolean[]  , number];

const var05 : TupleType02 = ["3",false,false,3]; 

export default {} ;