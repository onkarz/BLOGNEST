import { Component } from '@angular/core';
import { BlogService } from '../../blog.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css',
})
export class BloglistComponent {
  allBlogs: any;
  loggedInUser: any;
  showEdit: boolean = true;

  showBlog: boolean = false;

  constructor(private blog: BlogService, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '');

    console.log('Logged In user che Details', this.loggedInUser.id);

    this.getBlogs();
  }

  getBlogs() {
    this.blog.getAllBlogs().subscribe((data: any) => {
      console.log(data);
      this.allBlogs = data;
    });
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

  delete(id: any) {
    console.log(id);
    this.blog.deleteBlog(id).subscribe((data: any) => {
      alert('Blog Deleted Successfully');
      this.getBlogs();
    });
  }

  edit(id: any) {
    this.router.navigate(['/editblog', id]);
  }

  saveforlater(data: any) {
    let dataModel = {
      loggedInUserId: this.loggedInUser.id,
      blog: data,
    };

    this.blog.postSaveForLaterBlog(dataModel).subscribe((data: any) => {
      console.log(data);
      alert('Blog saved for later successfully');
      this.showBlog = false;
    });
  }

  home() {
    this.router.navigate(['/blogList']);
  }
}
