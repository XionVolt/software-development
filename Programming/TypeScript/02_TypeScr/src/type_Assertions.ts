// type assertions are also called Typescript casting
// What is type assertions
// https://youtu.be/lOuaE3nGS4g?si=ElgBPc1myX1Pairq&t=10
// So type assertion in ts is a way to tell the ts compiler that we know more about the type than the compiler does 

/* 

Type assertion in TypeScript allows you to inform the compiler about the specific type of a value, overriding its inferred type when you have more information about the value's type than compiler infer

This is useful for enhancing type safety without altering the actual type or value at runtime

There are two primary ways to perform type assertion: using the "as" keyword and the "<>" (angle bracket) syntax. 
While both syntaxes are equivalent, the "as" keyword is preferred in environments like JSX to avoid conflicts.

Type assertions are commonly used with DOM elements, such as asserting the return value of document.getElementById to a more specific type like HTMLInputElement like if your 
document.getElementById() return some input element

So with the help of type assertions you can convert to more or less specific type you start with

And note : mistakes can be made using assertions , if you not set up them correctly

*/


// example of type assertions using as 

type one = string;
type two = string | number; 
type three = 'hello';

// convert to less specific type
let a: one = 'welcome';

// so in this way we can assign the value of `a` to `b` at the same time making type of `b` less specific than `one`
let b = a as two; // convert to less specific type, as `one` is more specific than `two` because `two` can be string or a number both, but one can only be string

let c = a as three; // convert to more specific type, as `one`(we said `one` because , it is a type of `a`) is less specific than three (the actual literal value 'hello') 
console.log(c);
// c = 'string other than hello' // it not raise error above but it raise error below , why , shouldn't it raise error above ?

/*
Understanding Type Assertions
Type assertions in TypeScript do not change the actual type of the variable at runtime; they only tell TypeScript to treat the variable as a different type at compile time. However, TypeScript does not perform runtime checks to ensure the assertion is correct.

Why No Error at let c = a as three;?
let c = a as three;
Here, a is of type one, which is string.
three is specifically the string literal 'hello'.
Normally, you can't directly assign a general string to a specific literal type ('hello').
However, TypeScript allows type assertions (as three) even when they are incorrect, as long as the underlying type (string) is assignable.
Type assertions do not enforce correctness—they just override TypeScript's type checking.
Meaning: TypeScript trusts that you, the programmer, know what you're doing.
At this point, c is pretending to be 'hello', but it actually holds 'welcome'.

Why Does the Error Occur Later?
c = 'string other than hello';
Now, c is already declared as three ('hello').
'hello' is a literal type, meaning it can only be the string 'hello'.
'string other than hello' does not match the allowed value ('hello').
At this point, TypeScript enforces strict type checking, and an error is raised.

Shouldn't It Have Raised an Error Earlier?
Technically, yes, but TypeScript's type assertion mechanism does not check whether the asserted type is correct—it only allows you to override the type system.
Type assertions (as someType) do not perform runtime validation.
They are only checked when you actually try to assign an invalid value without an assertion.

Key Takeaways
- Type assertions (as) override TypeScript's checks but do not validate correctness.
- let c = a as three; does not raise an error because TypeScript assumes you know what you're doing.
- The error only appears when you later assign a value ('string other than hello') that does not match the literal type ('hello').
- If you want stricter checking, avoid using as too loosely. Instead, use proper type guards or narrowing.

Why does let c = true as three; give an error?
let c = true as three; // ❌ ERROR
So basically ts can check assertions when it can , but not in all cases.
Here, true is a boolean, while three is a string literal ('hello').
A boolean is NOT compatible with a string at all. 
Unlike string -> string literal, TypeScript does NOT allow boolean -> string because they are completely unrelated types., 
and ts find out that it 100% false that true is a any string literal.
Even with as, TypeScript enforces that the base types must be compatible.

Conclusion
✅ Allowed: string → string literal
🚫 Not Allowed: boolean → string literal

TypeScript allows string → 'hello' (literal) assertions because they belong to the same family of types (string).
TypeScript does NOT allow boolean → 'hello' because boolean and string are completely different types.
So, type assertions work only if the types are related—but they don't check correctness(at runtime), just compatibility!

*But if you still wanna assign c a true value and wanna assert it as string , you can do that in this way :* 
let c = true as unknown as three; 

You're performing double type assertion:

1. true as unknown → This tells TypeScript to first treat true as unknown. Since unknown is the most flexible type (it can be anything), TypeScript allows this assertion.
2. unknown as three → Now, you're telling TypeScript to treat this unknown value as the literal type 'hello'. Since unknown can be assigned to anything (with a type assertion), TypeScript allows this as well.
🔥 Why does this work?
unknown is a universal type that can hold any value.
TypeScript allows unknown to be cast to any type using assertions.
🤔 Is this safe?
No, it's not safe at runtime! You're basically forcing TypeScript to believe that true is 'hello', but in reality, it's still true. If you try to use c as 'hello', you might get unexpected behavior at runtime.

So now ts not complain about that and we complete two assertions in a row and this is also called double / force casting(or assertion)


*/

// same thing can be done using angle brackets example
let totalBill:any = 123;
let finalBill= <string> totalBill + 5 ; /* here it consider `totalBill + 5` expression return string  , so from here on it consider finalBill as taking string type value , 
but after runtime it will consider that not at runtime(when `finalBill` is assigned to `totalBill + 5`(that is number) at runtime ts trust you that you are assigning a correct type 
that you specify in assertion
and now if we assign number to finalBill now it gives error because finalBill not take a number type after runtime , instead it takes string type after runtime
finalBill = 7 , error  */

console.log(finalBill)

// one solid  pratical example : https://youtu.be/gieEQFIfgYc?si=MECNMb46Mqe4_DE2 , see this clip to see that example




// so here we are saying consider the return value of document.getElementById('exammple-input') as HTMLInputElement
const inputElement = document.getElementById('exammple-input') as HTMLInputElement;
inputElement.value = 'Hello';
/* So basically what we did above is : 
So before asserting the return type of document.getElementById('exammple-input'), TypeScript compiler automatically infers the type of that value to HTMLElement | null, but now we are telling the compiler that this value is HTMLInputElement more specifically, `so here we convert type to more specific type from lesser specific type`.
And here above, because TypeScript compiler automatically infers the type of the value that comes in inputElement as HTMLElement | null, and therefore HtmlElement and null do not have the property `value`, 
so it also gives an error if we do not explicitly tell the TypeScript compiler that the type of value that comes in inputElement is HTMLInputElement, not HtmlElement.
*/
// Wanna see more About usefullness of assertions : https://youtu.be/gieEQFIfgYc?si=hAKxw22UjSJhoWr7&t=6795 , see this clip by Dave Gray 

// so as we know ts automatically infers either its a HtmlElement or null, so if we wanna assert that this element actually exist (means not null) , we can put `!` at last of statement , it also called non-null assertion
const canvasElement  = document.getElementById('#canvas')! ;