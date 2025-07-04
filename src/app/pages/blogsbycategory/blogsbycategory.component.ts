import { Component } from '@angular/core';
import { BlogService } from '../../blog.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogsbycategory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blogsbycategory.component.html',
  styleUrl: './blogsbycategory.component.css',
})
export class BlogsbycategoryComponent {
  allBlogs: any;
  categories!: any[];
  selectedCategory!: string;

  isActive = true;
  isError = false;
  fontSize = 20;

  constructor(private blog: BlogService, private router: Router) {
    this.getBlogs();
  }

  getBlogs() {
    this.blog.getAllBlogs().subscribe((data: any) => {
      console.log(data);
      this.allBlogs = data;
      this.extractCategories();
    });
  }

  extractCategories() {
    //temp var
    const allCategories = this.allBlogs.map((blog: any) => blog.category);
    console.log('All categories print zale', allCategories);
    this.categories = ['All', ...new Set(allCategories)]; // Include 'all' for showing all blogs
    console.log(this.categories);
  }

  getFilteredBlogs() {
    return this.selectedCategory === 'All'
      ? this.allBlogs
      : this.allBlogs.filter(
          (blog: any) => blog.category === this.selectedCategory
          // blogs      =>  blogs.travel === travel
        );
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
