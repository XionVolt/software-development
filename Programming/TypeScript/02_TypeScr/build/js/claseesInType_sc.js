"use strict";
/* class Coder {
    name: string
    lang: string
    so here two things to understand (if we not use visibility modifiers)
    1. for initailaize any property we first have to declare it outside a constructor
    2. after declare some property , we have to initialize it
    constructor(name: string) {
        this.name = name;
        this.lang = lang;
    }

} */
// Now to keeps things dry (do not repeat yourself) we can use visibility modifiers like public , private , protected , etc. they are also be called data/access modifiers
class Coder {
    // by default all properties and method of a class is public , we also have readonly modifier that makes property readonly
    constructor(name, lang, age, 
    // means it can also be access in sub classs but not outside the class
    id = 0) {
        this.name = name;
        this.lang = lang;
        this.age = age;
        this.id = id;
        /*         so by using visibility modifiers we can declare and initialize a property in a single line ,
                   and assignments in the body of the constructor are not required here
         */ this.name = name;
        this.lang = lang;
    }
    code(language) {
        console.log(`${this.name} is coding in ${language}`);
    }
    getId() {
        return this.id;
    }
}
const coder = new Coder('John Doe', 'TypeScript', 30, 1); // now we already know like python , now if you not give any value to any required argument it will give error 
// coder.name = 'John Doe' Cannot assign to 'name' because it is a read-only property.
// console.log(coder.name) 
coder.code('TypeScript');
// console.log(coder.id) // Property 'id' is protected and only accessible within class 'Coder' and its subclasses.
console.log(coder.getId()); // instead use method
class WebCoder extends Coder {
    constructor(name, lang, age, framework) {
        super(name, lang, age);
        this.framework = framework;
        this.framework = framework;
    }
    getDecoratedId() {
        return `#${this.id}`;
    }
}
const webCoder = new WebCoder('Johny', 'TypeScript', 30, 'Angular');
console.log(webCoder.getDecoratedId());
