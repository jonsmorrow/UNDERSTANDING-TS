class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

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

class ITDepartment extends Department {
    admins: string[]

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    printAdminInformation() {
        console.log(this.admins);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if ( this.lastReport ) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
       this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Jon']);

it.addEmployee('Jon');
it.addEmployee('Katie');

// accounting.employees[2] = 'Cayman';

it.describe();

// accounting.name = 'NEW NAME';

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong.');


console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Joe');
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe();