import { Component } from '@angular/core';

@Component({
  selector: 'app-viewuser',
  standalone: true,
  imports: [],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {

  userDetails:any;



  constructor(){
    this.userDetails = JSON.parse(localStorage.getItem("user") || "" );
    console.log(this.userDetails);
  }

}
