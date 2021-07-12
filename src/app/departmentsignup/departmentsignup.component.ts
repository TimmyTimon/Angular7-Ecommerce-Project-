import { Component, OnInit } from '@angular/core';
import {Department} from '../classes/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-departmentsignup',
  templateUrl: './departmentsignup.component.html',
  styleUrls: ['./departmentsignup.component.css']
})
export class DepartmentsignupComponent implements OnInit {

  dept:Department=new Department();
  submitted=false;

  constructor(private deptService:DepartmentService) { }

  ngOnInit() {
  }

  newDepartment():void{
    this.submitted=false;
    this.dept=new Department();
  }

  save(){
    this.deptService.createDept(this.dept).
    subscribe(data => console.log(data), error => console.log(error));
    this.dept=new Department();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
