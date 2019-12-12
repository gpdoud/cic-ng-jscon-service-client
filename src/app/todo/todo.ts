import { Employee } from '../employee/employee';

export class Todo {
    id: number;
    description: string;
    priority: number;
    dueDate: string;
    employeeId: number;
    employee: Employee;

    constructor() {
        this.id = 0;
        this.description = '';
        this.priority = 3;
        this.dueDate = (new Date).toISOString();
        this.employeeId = 0;
    }
}