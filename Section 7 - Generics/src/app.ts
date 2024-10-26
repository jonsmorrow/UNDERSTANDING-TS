const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});

promise.then(data => {
    // data.split(' ');
    console.log(data);
})