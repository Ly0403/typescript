// FUNCTION TYPE EXPRESSION
type FuncType01 = (a: number, b: number) => void;

function sum(func01: FuncType01, a: number, b: number): void {
  func01(a, b);
}

function func01(a: number, b: number): void {
  console.log(a + b);
}

sum(func01, 5, 4);

// WHEN WE NEED TO ADD PROPERTIES TO FUNCTIONS
// CALL SIGNATURES

type FuncType02 = {
    a: number,
    (a: number): string,
};

function func02(fn: FuncType02):void{
    console.log(fn.a);
    console.log(fn(6));
}

function func03(a: number): string {
    return a.toString();
} 

func03.a = 222;
func02(func03);

// GENERIC FUNCTIONS

function func04 <Type extends {a: number} > (a: Type): string{
    return "" + a;
} 

// console.log(func04(2)); // error 2 as number not includes{ a: number} 
console.log( func04({a: 4} ));

// OVERLOAD SIGNATURES
function func05(a: string): string;
function func05(a:number): number;
function func05(a: string| number ){
    // return "" + a; // error since return always string
    return a; // OK
} 

console.log(func05(2));

export default {} ;
