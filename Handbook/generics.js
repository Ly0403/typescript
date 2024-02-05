function func01(arg) {
    return arg;
}
const funcDef01 = func01;
// GENERIC CLASSES
class NewClass {
    constructor() {
        this.var01 = "";
    }
    add(newParam01) {
        console.log(this.var01);
    }
}
const newClass01 = new NewClass();
// newClass01.var01="sss"; // should be number 
newClass01.var01 = 6;
newClass01.add(4);
// GENERIC CONSTRAINS
function func02(a, k) {
    console.log(a[k]);
}
const newObj01 = {
    a: 1, b: "sss",
};
// func02(newObj01, "ad"); // ad not key of obj
func02(newObj01, "a"); // OK
// function func03<T>(a: T): void {
//     console.log(a.length); // the Type T does not have proprty length
// } 
function func04(a) {
    console.log(a.length); // Type T have property length from constrains
}
export default {};
