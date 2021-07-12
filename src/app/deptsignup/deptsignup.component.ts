import { Component, OnInit } from '@angular/core';
import {Department} from '../classes/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-deptsignup',
  templateUrl: './deptsignup.component.html',
  styleUrls: ['./deptsignup.component.css']
})
export class DeptsignupComponent implements OnInit {

  dept:Department=new Department();
  submitted=false;

  countries=['Kenya','Uganda','Tanazania','Ethopia'];

  constructor(private deptService:DepartmentService ) { }

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
