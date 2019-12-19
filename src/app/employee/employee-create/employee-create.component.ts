import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  showPassword: boolean = false;

  save(): void {
    this.emplsvc.insert(this.employee).subscribe(
      res => {
        this.router.navigateByUrl("/employees/list");
      }, err => console.error(err)
    );
  }

  constructor(
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
