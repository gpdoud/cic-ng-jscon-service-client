import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];

  constructor(
    private emplsvc: EmployeeService
  ) { }

  ngOnInit() {
    this.emplsvc.list().subscribe(
      res => {
        this.employees = res;
        console.log("Employees:", this.employees);
      },
      err => console.error(err)
    );
  }

}
