import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  allBlogs: any;
  allUsers: any;
  savedBlogs: any;
  newSavedBlogs: any;
  blogsCount: any;
  usersCount: any;
  savedBlogsCount: any;

  constructor(private user: UserService, private blog: BlogService) {
    this.getBlogs();
    this.getAllUsers();
    this.getSavedBlogs();
  }

  getBlogs() {
    this.blog.getAllBlogs().subscribe((data: any) => {
      console.log(data);
      this.allBlogs = data;
      this.blogsCount = this.allBlogs.length;
      console.log("Total Blogs", this.blogsCount);
    });
  }

  getAllUsers() {
    this.user.getAllUsers().subscribe((data: any) => {
      console.log(data);

      this.allUsers = data;

      console.log('Sagale Users Aale', this.allUsers);

      this.usersCount = this.allUsers.length;
      console.log("Total Users", this.usersCount);
    });
  }

  getSavedBlogs() {
    this.blog.getSavedBlogs().subscribe((data: any) => {
      console.log(data);

      this.savedBlogs = data;
      console.log(this.savedBlogs);

      this.savedBlogsCount = this.savedBlogs.length;
      console.log("Total Saved Blogs", this.savedBlogsCount);

      this.savedBlogs.forEach((data: any) => {
        this.newSavedBlogs = data.blog;
        console.log(this.newSavedBlogs);
      });
    });
  }
}
