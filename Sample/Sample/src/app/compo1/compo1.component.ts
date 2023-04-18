import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {

  user:User =new User("" ,"");
  getDetails(){
    console.log(this.user);
  }

}
