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
  showTab!: boolean;
  myBlogs: any;
  savedBlogs: any;
  newSavedBlogs: any = [];
  userBlogs: any;
  savedBlogIds!: Set<unknown>;
  showSavedTab!: boolean;
  constructor(private blogs: BlogService, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '');

    console.log('Logged In user che Details', this.loggedInUser);

    this.getBlogs();
  }

  ngOnInit() {
    this.blogs
      .getSavedBlogsByUser(this.loggedInUser.id)
      .subscribe((data: any) => {
        this.savedBlogIds = new Set(data.map((b: any) => b.blogId));
      });

    this.blogs.getAllSavedBlogs().subscribe((data: any) => {
      this.savedBlogs = data;
      console.log(this.savedBlogs);
    });
  }

  getBlogs() {
    this.blogs.getAllBlogs().subscribe((data: any) => {
      console.log(data);
      this.allBlogs = data;
      console.log(this.allBlogs);
      this.userBlogs = this.allBlogs.filter((blog: any) => {
        console.log(blog);
        return blog.userId === this.loggedInUser.id;
      });

      console.log(this.userBlogs);
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

  showSavedTabs() {
    this.showTab = false;
    this.showSavedTab = true;
  }

  showTabs() {
    this.showSavedTab = false;
    this.showTab = true;
  }


  ngAfterContentInit(){
    this.getBlogs();
  }


  ngAfterContentChecked(){
    //Checking Content released or not
    this.getBlogs();
  }
}
