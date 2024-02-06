/* eslint-disable @typescript-eslint/no-unused-vars */
// ENUMS
// To define a set of constants

// Numeric Enums
enum Enum01 {
  First,
  Second,
  Third,
}

console.log(Enum01.Second); // 1 without inital value first one is 0

enum Enum02 {
  First = 22,
  Second,
  Third,
}

console.log(Enum02.Second); // 23 without inital value first one is 22

// STRING ENUMS

enum Enum03 {
  first = "FIRST",
  second = "SECOND",
}

console.log(Enum03.first);

// Each member of enum can be CONSTANT OR COMPUTED
enum Enum04 {
  a = "FIRST", // constant
  b = "FIRST".length, // computed
}

// Enum keyof tyepof

type Type01 = keyof typeof Enum04; // "a" | "b"

enum Enum05 {
  A,
  B = "SECOND".length,
}

const enum Enum06 {
  A,
//   B = "SECOND".length, const enum can only have CONSTANTS
}

export default {};
