"use strict";
// Implicitly , this happens when we not explicitly define types
// ------------------------------------------------------------
let myString = "Hello"; // here ts automatically inferred(figure out) the type that this is a string
// myString = 1; because ts inferred that this is a `myString` take string type values implicitly, so we can't assign number to string type variable
// if we take case of function
function Message(message) {
    return message;
}
/*  ts automatically inferred that what function going to return based on the information it knows about that funtion
    like here it inferred that this function going to return string type value based on the parameter type it knows
 */
// Explicitely define types , when we explicitly define types we called that `type annotation`
// ------------------------------------------------------------
// number: All numeric values (integers and floating point)
let age = 30;
// boolean: true or false values
let isLogedIn = true;
// Regex Type
// ------------------------------------------------------------
let myRegex = /foo/;
// Function Types
// ------------------------------------------------------------
// Functions can have typed parameters and return values
function greet(user) {
    console.log("Hello " + user);
    return undefined;
}
let userName = "Alice";
console.log(greet(userName));
// Function type annotation with arrow syntax , basically this is for function expression
// (parameter: type) => returnType
// so we make parameter `parameterType` optional  , so now parameterType can be string | undefined , and in ts optional params must be at last of all required parameters(if exist)
let functionName = function (parameters = 'default_value') {
    return parameters;
};
functionName('string_value'); // functionName(1); , gives error as this is not a string type
/*
can also be done like this
let functionName = (parameterType: string) : string => {
    return parameters;
}
*/
// ------------------------------------------------------------
/*
Interfaces can also be used for make function type annotation , so yeah TypeScript, interfaces can also define function types using call signatures ,
when an interface has only a function signature, it behaves like a function type alias.
In an interface, when you define a function signature like (parameter: string): string;, it means any function assigned to this interface must match this signature.
Here The function(that assigned to the interface) must accept a string and return a string.
---- Example ----

interface FunctionType {
    (parameter: string): string;
    }

- Note : When implementing an interface with function overloads, the function must explicitly handle all cases. Like in example that i give in another file of named : function_overloading.ts
means the function implementation must explicitly define a parameter types and return types that includes all possible cases (string | number in that example) in the case of overloading , although using function overloads directly (without an interface) is often a better approach for defining multiple function signatures , using Union.

*/
// ------------------------------------------------------------
/*
type aliases can also be use for make function type annotation
---- Example ----
type FunctionType = (parameter: string) => string;
*/
// Array Types
// ------------------------------------------------------------
// Two ways to declare array types:
// 1. Using square brackets: type[]
// 2. Using generic Array<type>
let myNums = [1, 2, 3, 'string'];
let genericArray = [1, 2, 3]; // will explore this soon in detailed
// Object Types
// ------------------------------------------------------------
// Objects with specific property types
let myObj = {
    name: "John Doe",
    age: 30
};
// Special Types
// ------------------------------------------------------------
// any: Opt-out of type checking
let myAny = "Hello"; // Can be assigned any type
// void: Absence of any type, commonly used as function return type , Basically we can say the function that returns nothing ts infers implicitly that it returns void , until we explicitly define the return type
function logMessage(message) {
    console.log(message); // No return value
}
// never: Represents values that never occur
// Used for functions that never return (throw error or infinite loop)
function error(message) {
    throw new Error(message);
}
// Tuple Types
// ------------------------------------------------------------
// Fixed-length array where each element has a specific type
let myTuple = [1, "Hello"];
// here's a quick thing to know:
// if we make some array 
let myArray = [1, 's'];
// now if we try to assign myTuple a myArray
// myTuple = myArray;  // gives error , reason : Target(myTuple) requires 2 and only 2 element(s) but source(myArray) may have fewer or more.
// Enum Types
// ------------------------------------------------------------
// A way to give friendly names to numeric values
var Color;
(function (Color) {
    Color[Color["a"] = 1] = "a";
    Color[Color["b"] = 2] = "b";
    Color[Color["c"] = 3] = "c"; // Auto-increments to 3
})(Color || (Color = {}));
let myColor = 2; // so myColor can only contain 1,2,3 
// Unknown Type
// ------------------------------------------------------------
// Similar to any, but more type-safe as operations require type checking
let myUnknown = "Hello";
myUnknown = 1;
myUnknown = true;
// Union Types
// ------------------------------------------------------------
// Variable can hold more than one type
let myUnion = "Hello";
myUnion = 1; // Valid
// myUnion = true;  // Invalid: boolean not allowed
// Literal Types
// ------------------------------------------------------------
// Specific string/number/any values as types
let myLiteral = "hello"; // Can only be assigned "hello"
// We can also specify a variable that can be object of a specific class
// ------------------------------------------------------------
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// so here userobj can accept only object of User class
let userobj = new User("John Doe", 30);
let guitaristobj = {
    name: "John Doe",
    // age: 30, still work fine
    instrument: "Guitar"
};
;
// so both are same 
function sayBye(message) {
    var _a;
    // now if we do this 
    // console.log( message.name.toUpperCase() )it gives error because : 'message.name' is possibly 'undefined'.
    // so we have to check if message.name is defined or not
    // if(message.name){} // we can use if 
    // or just do 
    console.log((_a = message.name) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    /*  so typescript realize in advance that message.name can also be undefined and upperCase() can cause error because of that,
    so that's one way it helps you eliminate errors in your code at compile time(development time) rather at run time(when the app runs) unlike in JavaScript  */
}
// ------------------- Note -----------------------
const sumAll = (a = 10, b, c = 9) => a + b + c;
console.log(sumAll(undefined, 1, undefined)); // in js and ts both if param is given undefined it use default value(but only if default value is specfied for that param)
// Note : you can't give default values in function signature(type aliases / interface) direct , you have to give them in function implementation
// type annotation with rest operator
// -------------------------------------------------------------
const factorial = (...args) => args.reduce((a, b) => a * b);
console.log(factorial(1, 2, 3, 4, 5));
// -------------------- Note -----------------------
/*
 this will gives error ,
 ```Function lacks ending return statement and return type does not include 'undefined'```
TypeScript requires all code paths to return a value if the function has a return type.
TypeScript expects a guaranteed return value in all possible cases.
Here, we have if statements, but no default return outside the conditions.
TypeScript does not assume that value is always number | string. In some cases, TypeScript may think that execution could fall through without returning anything, resulting in an implicit undefined.

So to solve this error first , you can do , - Simply You can use else instead of if statement , which handle all paths

- Or you can just add 3rd return statement outside of both if statements

- Or last that is a motive of this example : throw a error, or call a function that has never type, now you have question why if our function has string return type, it should only return string, so how can we return never type
Its bacause :
1️⃣ Understanding never in TypeScript
In TypeScript, never is a special type that represents a value that will never be observed. This happens in two main cases:

1. A function that never returns (e.g., throw or while(true))
2. A function that has unreachable code paths

Since throw always terminates execution, TypeScript treats throwError() as returning never.

2️⃣ Why Doesn’t Your Function Throw a Type Error?
So Below is our function: So Why Does It Work Without an Error?

1. TypeScript sees throw as an "exit"

- The function return type is string.
- When throw new Error() is encountered, execution stops. That guarantees undefined never be return.
- The throw statement has a never type because the function does not proceed past this point.


2. TypeScript does not require unreachable code to match the function's return type

- The function always returns string OR throws an error.
- Since throw means the function will never reach an invalid state, TypeScript does not complain.
- In TypeScript, never is compatible with all return types, because execution is halted.

3️⃣ Final Answer
👉 TypeScript does not throw an error because throw new Error() effectively ends execution, and never is considered compatible with string.
🚀 This means that any function that throws an error is "safe" in TypeScript's eyes because it will never return an incorrect value!

4️⃣ Conclusion :
So from here what we conclude is :
Ts more focus on not returning the type (that is not specified as return type) as compare to returning the type (that is specified)

*/
const numOrString = (value) => {
    if (typeof value === 'number') {
        return 'number';
    }
    if (typeof value === 'string') {
        return 'string';
    }
    throw new Error('value must be number or string');
};
