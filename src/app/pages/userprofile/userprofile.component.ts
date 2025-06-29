import { Component } from '@angular/core';
import { BlogService } from '../../blog.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
})
export class UserprofileComponent {
  loggedInUser: any;
  allBlogs: any;

  myBlogs: any;
  savedBlogs: any;
  newSavedBlogs: any = [];
  constructor(private blogs: BlogService, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '');

    console.log('Logged In user che Details', this.loggedInUser);

    this.getBlogs();
    this.getSavedBlogs();
  }

  getBlogs() {
    this.blogs.getAllBlogs().subscribe((data: any) => {
      console.log(data);
      this.allBlogs = data;

      this.allBlogs.includes((data: any) => {
        data.blogId === this.loggedInUser.id;
      });

      console.log(this.allBlogs);
    });
  }

  delete(id: any) {
    console.log(id);
    this.blogs.deleteBlog(id).subscribe((data: any) => {
      alert('Blog Deleted Successfully');
      this.getBlogs();
    });
  }

  edit(id: any) {
    this.router.navigate(['/editblog', id]);
  }


  getSavedBlogs(){
    this.blogs.getSavedBlogs().subscribe((data:any)=>{
      console.log(data);

      this.savedBlogs = data;
      console.log(this.savedBlogs);

      this.savedBlogs.forEach((data:any) => {
          this.newSavedBlogs = data.blog
          console.log(this.newSavedBlogs);
      });

    })
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
