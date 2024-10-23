abstract class Department {
    static fiscalYear = 2020;

    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear); 
    }

    static createEmployee(name: string) {
        return {name: name };
    }

    abstract describe(this: Department): void;

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

    describe() {
        console.log('IT Department - ID: ' + this.id);
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

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
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

const employee1 = Department.createEmployee('Jon');
console.log(employee1, Department.fiscalYear);

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

accounting.describe();

// accounting.printReports();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }

// accountingCopy.describe();