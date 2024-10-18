class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('1', 'Accounting');

accounting.addEmployee('Jon');
accounting.addEmployee('Katie');

// accounting.employees[2] = 'Cayman';

accounting.describe();

// accounting.name = 'NEW NAME';

accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe();