const userName = 'Jon';
// userName = 'Jon Morrow';

// let age = 42
// age = 40;

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

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(add(5));

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: 'Jon',
    age: 40,
    hobbies: [...hobbies]
}

hobbies.push('Flying');

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [ hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: fName, age } = person;
console.log( fName, age );