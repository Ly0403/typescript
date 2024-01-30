function func01(a:number|string):string{
    if(typeof a === "number") return a.toString();
    else return a;
} 

// TRUSTHINESS NARROWING
// 0 NaN "" null undefined are false 
function func02(a:string[]| null| string   ):string{
    // if(typeof a === "object"){
    //     for(const v of a) { // can be null

    //     } 
    // }
    if(a /* trustniess narrowing */ && typeof a === "object") {
        for(const v of a){
            return v;
        } 
    } 
    else if( typeof a === "string" ){
        return a;
    }
    else {
        return "aaa";
    } 
} 


// EQUALITY NARROWING
function func03(a: string|null|undefined) :string {
    if(a != null /* the looser not equal != eliminate undefined and null since !=null means null or undefined */){
        return a.toLowerCase();
    } 
    else{
        return "";
    } 
} 

// IN OPERATOR NARROWING
type newType = {
    aa: number,
} 

function func04(a: number|newType) :string {
    // return a.toUpperCase(); // can not have the method
    if("aa" in a){
        return a.aa.toString();
    } 
    else{
        return "";
    } 
} 

// TYPE PREDICATE
let aabb : number| string;
aabb.toUpperCase(); // error
(aabb as string).toLowerCase() // the method can be reached by type predicate