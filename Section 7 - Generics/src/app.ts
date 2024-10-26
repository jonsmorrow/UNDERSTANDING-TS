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