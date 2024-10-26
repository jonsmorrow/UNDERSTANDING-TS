function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('LOGGING - PERSON')
class Person {
    name = 'Jon';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);