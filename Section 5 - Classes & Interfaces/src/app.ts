interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Jon', 42);

// user1 = {
//     name: 'Jon',
//     age: 42,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// };

user1.greet('Hi there - I am');

console.log(user1);