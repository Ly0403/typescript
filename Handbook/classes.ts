/* eslint-disable @typescript-eslint/no-unused-vars */
class NewClass {
  // var01:string; error not to initialize
  var01!: string; // to bypass the error !
}

const newClass01 = new NewClass();
newClass01.var01 = "1";

// INHERITANCE
// IMPLEMENTS
interface NewInterface01 {
  x?: number;
  y: number;
  add(a: number): string;
}

class NewClass02 implements NewInterface01 {
  y!: number;
  add(a: number): string {
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

class NewClass03 extends NewClass02 {}

const newClass03 = new NewClass03();
newClass03.y = 2; // OK

// OVERRIDING
class NewClass04 extends NewClass02 {
  add(a: string | number): string {
    if (typeof a === "number") super.add(a);
    return "aa";
  }
}

const newClass04 = new NewClass04();
newClass04.add(1); // ""
newClass04.add("aaa"); // "aa"

// ACCESS MODIFIERS

class Class04 {
  private var01 = 1;
  public var02 = 2;
  protected var03 = 3;
}

const class04 = new Class04();
class04.var02; // OK
// class04.var01;
// class04.var03;

console.log(class04["var01"]); // OK

// this in classes
class Class05 {
  private name: string = "sss";
  public showName(): string {
    return this.name;
  }
  public showNameArrow = () => {
    return this.name;
  };
  public showNameThisParam(this: Class05) {
    return this.name;
  }
}

const class05 = new Class05();
class05.showName();
const obj01 = {
  name: "aa",
  show: class05.showName,
  showArr: class05.showNameArrow,
  showWithThisParam: class05.showNameThisParam,
};
console.log(obj01.show()); // this is obj01 not class05
console.log(obj01.showArr()); // this is class05 since arrow functions do not have this

// TYPE FROM CLASSES

class Class06{
   private x = 1;  
} 

type Class06Type = InstanceType<typeof Class06>;

abstract class Base {
    public abstract get(): string;    
} 

class Class07 extends Base{
    public get(): string { // the abstract method must be implemented
        return "ss";
    }

} 

export default {} ;