"use strict";
function func01(input01) {
    console.log(input01.b);
    console.log(input01.c);
    // input01.c = 22; // can not be set
}
func01({ a: 2 }); // undefined undefined
func01({ a: 2, b: 4 }); // 4 undefined
const address = {
    a: 1, b: 2, c: "sss",
};
const var01 = {
    a: 6,
};
const var02 = {
    a: false,
};
const var03 = {
    a: "false",
};
const var04 = ["1", 2, false];
const var05 = ["3", false, false, 3];
