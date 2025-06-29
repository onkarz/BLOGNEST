import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    email:"",
    password:""
  }

  dbUsers:any;
  loggedInUser: any;

  constructor(private userS:UserService, private router:Router){

     this.getAllUsers();

  }

  getAllUsers(){
    this.userS.getAllUsers().subscribe((data:any)=>{
      console.log(data);
      this.dbUsers = data;
    })
  }

  register(){
    this.router.navigate(["/register"]);
  }


  submit(){
    console.log(this.user);
    const user = this.dbUsers.find((u:any) => u.email === this.user.email && u.password === this.user.password);

     if (user) {
      this.loggedInUser = user;
      alert("Login Successful")
      console.log('Login successful:', this.loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
      this.router.navigate(["/blogList"]);
    } else {
     alert('Invalid email or password');
    }

  }

}
