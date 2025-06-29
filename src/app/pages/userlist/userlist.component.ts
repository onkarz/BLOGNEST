import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent {
  allUsers: any;

  constructor(private user: UserService, private router: Router) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.user.getAllUsers().subscribe((data: any) => {
      console.log(data);

      this.allUsers = data;

      console.log('Sagale Users Aale', this.allUsers);
    });
  }

  viewUser(user: any) {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/viewuser']);
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
