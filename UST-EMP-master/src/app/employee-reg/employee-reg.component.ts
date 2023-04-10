import { Component, OnInit } from '@angular/core';
import { EmployeeRegService } from '../employee-reg.service';
import { User } from '../User';


@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit  {

  User:User= new User("","",0,"");
  message:any;
  
  constructor(private service:EmployeeRegService){



  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 ngOnChanges(){
   
  }
public registerNow(){
  let resp=this.service.doRegistration(this.User);
  resp.subscribe((data=>this.message=data))
}


}
