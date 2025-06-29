import { Routes } from '@angular/router';
import { BloglistComponent } from './pages/bloglist/bloglist.component';
import { BlogsbycategoryComponent } from './pages/blogsbycategory/blogsbycategory.component';
import { BlogsforfutureComponent } from './pages/blogsforfuture/blogsforfuture.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditblogComponent } from './pages/editblog/editblog.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { ViewblogComponent } from './pages/viewblog/viewblog.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';

export const routes: Routes = [
  {
    path: '',
    component: BloglistComponent,
  },

  {
    path: 'blogList',
    component: BloglistComponent,
  },
  {
    path: 'blogsbycategory',
    component: BlogsbycategoryComponent,
  },
  {
    path: 'blogsforfuture',
    component: BlogsforfutureComponent,
  },
  {
    path: 'createblog',
    component: CreateblogComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'editblog/:id',
    component: EditblogComponent,
  },
  {
    path: 'edituser',
    component: EdituserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'userlist',
    component: UserlistComponent,
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,
  },
  {
    path: 'viewblog',
    component: ViewblogComponent,
  },
  {
    path: 'viewuser',
    component: ViewuserComponent,
  },
];
