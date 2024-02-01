/* eslint-disable @typescript-eslint/no-unused-vars */
// GENERIC INTERFACES
interface NewFuncType<T> {
  (a: T): T;
} 

function func01<T> (arg: T): T{
    return arg;
} 

const funcDef01: NewFuncType<number> = func01;

// GENERIC CLASSES
class NewClass<T> {
    var01: T="" as T;
    add(newParam01:T):void{
        console.log(this.var01);
    } 
} 

const newClass01 = new NewClass<number>();
// newClass01.var01="sss"; // should be number 
newClass01.var01=6;
newClass01.add(4);

// GENERIC CONSTRAINS
function func02<T, K extends keyof T>(a: T, k: K): void {
    console.log(a[k]);
} 

interface NewType02 {
    a: number,
    b: string,
} 

const newObj01: NewType02 = {
    a: 1, b: "sss",
} 

// func02(newObj01, "ad"); // ad not key of obj
func02(newObj01, "a"); // OK

// function func03<T>(a: T): void {
//     console.log(a.length); // the Type T does not have proprty length
// } 

function func04<T extends {length: number} >(a: T): void {
    console.log(a.length); // Type T have property length from constrains
} 

