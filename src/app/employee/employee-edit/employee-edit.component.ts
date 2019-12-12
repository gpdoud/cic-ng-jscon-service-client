import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee = new Employee();

  save(): void {
    this.emplsvc.update(this.employee).subscribe(
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
    let id = this.route.snapshot.params.id;
    this.emplsvc.get(id).subscribe(
      res => {
        this.employee = res;
        console.log("Employee:", this.employee);
      }, err => console.error(err)
    );
  }

}
