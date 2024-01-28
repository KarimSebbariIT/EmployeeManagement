import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/EmployeeService';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  public employeeList:Employee[]=[];
  loadEmployees(){
    this.employeeService.GetEmployees().subscribe((data: Employee[]) => {
      this.employeeList = data;
    });
  }
}
