"use strict";
function sum(func01, a, b) {
    func01(a, b);
}
function func01(a, b) {
    console.log(a + b);
}
sum(func01, 5, 4);
function func02(fn) {
    console.log(fn.a);
    console.log(fn(6));
}
function func03(a) {
    return a.toString();
}
func03.a = 222;
func02(func03);
// GENERIC FUNCTIONS
function func04(a) {
    return "" + a;
}
// console.log(func04(2)); // error 2 as number not includes{ a: number} 
console.log(func04({ a: 4 }));
function func05(a) {
    return a;
}
console.log(func05(2));
