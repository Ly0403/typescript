var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
// Class Decorators
import "reflect-metadata";
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Class01 = class Class01 {
    constructor(a) {
        this.var01 = a;
    }
    method01() { }
};
__decorate([
    enumerable(false) // make enumarable property false
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Class01.prototype, "method01", null);
Class01 = __decorate([
    sealed,
    __metadata("design:paramtypes", [Number])
], Class01);
const class01 = new Class01(1);
class01.var01 = 2;
// Method Decorators
function enumerable(value) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
export default {};
