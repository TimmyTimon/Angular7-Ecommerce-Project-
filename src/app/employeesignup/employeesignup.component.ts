import { Component, OnInit } from '@angular/core';
import {Employee} from '../classes/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employeesignup',
  templateUrl: './employeesignup.component.html',
  styleUrls: ['./employeesignup.component.css']
})
export class EmployeesignupComponent implements OnInit {

  employee:Employee=new Employee();
  submitted=false;

  genders=['Male','Female'];

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
  }

  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
      }
    
      save(){
        
        this.empService.createEmployee(this.employee)
        .subscribe(data =>console.log(data), error => console.log(error));
        this.employee=new Employee();
    
      }
    
      onSubmit(){
        this.submitted=true;
        this.save();
      }

}
