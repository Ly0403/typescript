/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
// Class Decorators
import "reflect-metadata";

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Class01 {
  public var01: number;

  constructor(a: number) {
    this.var01 = a;
  }

  @enumerable(false) // make enumarable property false
  public method01() {}
}

const class01 = new Class01(1);
class01.var01 = 2;

// Method Decorators

function enumerable(value: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

export default {} ;