import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  inputDays: any;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  takeVacation(employee) {
    console.log('selected employee', employee);
    this.employees = this.employeeService.takeVacation(employee.id, employee.inpdays || 0);
  }

  work(employee) {
    console.log('selected employee', employee);
    this.employees = this.employeeService.work(employee.id, employee.inpdays || 0);
  }
}
