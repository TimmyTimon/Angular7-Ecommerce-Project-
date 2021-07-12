import { Component, OnInit } from '@angular/core';
import {Employee} from '../classes/employee';

@Component({
  selector: 'app-employeesignin',
  templateUrl: './employeesignin.component.html',
  styleUrls: ['./employeesignin.component.css']
})
export class EmployeesigninComponent implements OnInit {

  submitted=false;
  constructor() { }

  ngOnInit() {
  }

 onSubmit(){
   
 }

}
