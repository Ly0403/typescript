/* eslint-disable @typescript-eslint/no-unused-vars */
// ENUMS
// To define a set of constants
// Numeric Enums
var Enum01;
(function (Enum01) {
    Enum01[Enum01["First"] = 0] = "First";
    Enum01[Enum01["Second"] = 1] = "Second";
    Enum01[Enum01["Third"] = 2] = "Third";
})(Enum01 || (Enum01 = {}));
console.log(Enum01.Second); // 1 without inital value first one is 0
var Enum02;
(function (Enum02) {
    Enum02[Enum02["First"] = 22] = "First";
    Enum02[Enum02["Second"] = 23] = "Second";
    Enum02[Enum02["Third"] = 24] = "Third";
})(Enum02 || (Enum02 = {}));
console.log(Enum02.Second); // 23 without inital value first one is 22
// STRING ENUMS
var Enum03;
(function (Enum03) {
    Enum03["first"] = "FIRST";
    Enum03["second"] = "SECOND";
})(Enum03 || (Enum03 = {}));
console.log(Enum03.first);
// Each member of enum can be CONSTANT OR COMPUTED
var Enum04;
(function (Enum04) {
    Enum04["a"] = "FIRST";
    Enum04[Enum04["b"] = "FIRST".length] = "b";
})(Enum04 || (Enum04 = {}));
console.log(Enum01[0]);
export default {};
