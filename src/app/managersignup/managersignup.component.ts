import { Component, OnInit } from '@angular/core';
import {Manager} from '../classes/manager';
import {ManagerService} from '../services/manager.service';

@Component({
  selector: 'app-managersignup',
  templateUrl: './managersignup.component.html',
  styleUrls: ['./managersignup.component.css']
})
export class ManagersignupComponent implements OnInit {

  manager:Manager=new Manager();
  submitted=false;

  genders=['Male','Female'];

  constructor(private mngService:ManagerService) { }

  ngOnInit() {
  }

  newManager():void{
    this.submitted=false;
    this.manager=new Manager();
  }

  save(){
    this.mngService.createManager(this.manager)
    .subscribe(data => console.log(data), error =>console.log(error));
    this.manager=new Manager();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
    }

}
