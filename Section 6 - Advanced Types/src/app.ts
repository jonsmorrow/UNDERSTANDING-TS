type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jon',
    privileges: ['create-server'],
    startDate: new Date();
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;