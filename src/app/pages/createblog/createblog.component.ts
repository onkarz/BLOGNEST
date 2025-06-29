import { Component } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createblog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.css',
})
export class CreateblogComponent {
  blog = {
    title: '',
    description: '',
    category: '',
    author: '',
    imageUrl: '',
    createdAt: Date(),
  };
  imageUrl: any;
  loggedInUser: any;

  constructor(private blogS: BlogService, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '');

    console.log('Logged In user che Details', this.loggedInUser);
  }

  createBlog() {
    let userModel = {
      title: this.blog.title,
      description: this.blog.description,
      category: this.blog.category,
      author: this.blog.author,
      imageUrl: this.blog.imageUrl,
      userId: this.loggedInUser.id,
      createdAt: Date(),
    };

    console.log(userModel);

    this.blogS.postBlog(userModel).subscribe((data:any)=>{
      alert("Blog Added Successfully");
      this.router.navigate(["/blogList"]);
    })
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; // Store the image data
        this.blog.imageUrl = this.imageUrl as string;
      };
      reader.readAsDataURL(file);
    }
  }


    profile() {
    this.router.navigate(['/userprofile']);
  }

  users() {
    this.router.navigate(['/userlist']);
  }

  logOut() {
    console.log('hhiiiiiiiiii');

    localStorage.removeItem('loggedInUser');

    this.router.navigate(['/login']);
  }

  blogsByCategory() {
    this.router.navigate(['/blogsbycategory']);
  }

  create() {
    this.router.navigate(['/createblog']);
  }

  home() {
    this.router.navigate(['/blogList']);
  }
}
