import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  image: any;

  constructor(private userS:UserService, private router:Router){}

  user = {
     name:"",
     email:"",
     password:"",
     address:"",
     city:"",
     phone:"",
     imageUrl:""
  }
  imageUrl: any;


  submit(){
    console.log(this.user);

    this.userS.postUser(this.user).subscribe((data:any)=>{
      alert("User Registered Successfully");

    this.router.navigate(["/login"]);

    })
  }

    onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; // Store the image data
        this.user.imageUrl = this.imageUrl as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
