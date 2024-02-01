"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
class NewClass {
}
const newClass01 = new NewClass();
newClass01.var01 = "1";
class NewClass02 {
    add(a) {
        return "";
    }
}
// class NewClass03 implements NewInterface01 {
// ERROR SINCE NO ADD METHOD IN THE CLASS
// } 
const newClass02 = new NewClass02();
// newClass02.x = 1; ERROR SINCE NO X IN THE CLASS
newClass02.y = 2; // OK
// EXTENDS
class NewClass03 extends NewClass02 {
}
const newClass03 = new NewClass03();
newClass03.y = 2; // OK
// OVERRIDING
class NewClass04 extends NewClass02 {
    add(a) {
        if (typeof a === "number")
            super.add(a);
        return "aa";
    }
}
const newClass04 = new NewClass04();
newClass04.add(1); // ""
newClass04.add("aaa"); // "aa"
