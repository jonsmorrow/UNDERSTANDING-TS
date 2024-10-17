const userName = 'Jon';
// userName = 'Jon Morrow';

let age = 42
age = 40;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);
// console.log(result;

// const add = (a: number, b: number) => {
//     return a + b;
// }

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(5));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}