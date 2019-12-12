export class Employee {
    id: number;
    username: string;
    password: string;
    name: string;
    address: string;
    city: string;
    stateCode: string;
    zip: string;
    isActive: boolean;
    ptoDays: number;
    salary: number;

    constructor() {
        this.id = 0;
        this.username = '';
        this.password = '';
        this.name = '';
        this.address = ''; 
        this.city = ''; 
        this.stateCode = ''; 
        this.zip = '';
        this.isActive = true;
        this.ptoDays = 15; 
        this.salary = 50000;
    }
}