// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, _reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
//     console.log(data);
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name: 'Jon'}, {age: 42}));
const mergedObj = merge({name: 'Jon'}, {age: 42});
const mergedObj2 = merge({name: 'Jon', hobbies: ['Flying', 'Scuba']}, {age: 42});
console.log(mergedObj);
console.log(mergedObj2.name, mergedObj2.age, mergedObj2.hobbies);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi There!'));
console.log(countAndDescribe(['Flying', 'Sailing', 'Scuba']));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(45));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Jon'}, 'name');