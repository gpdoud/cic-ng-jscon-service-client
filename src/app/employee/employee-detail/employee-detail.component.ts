import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee = new Employee();
  showPassword: boolean = false;
  
  verifyDelete: boolean = false;
  delete(): void {
    this.verifyDelete = !this.verifyDelete;
  }
  verifiedDelete(): void {
    this.emplsvc.delete(this.employee.id).subscribe(
      res =>  this.router.navigateByUrl("/employees/list")
      ,err => console.error(err)
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
