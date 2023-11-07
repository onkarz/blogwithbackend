import { ReportedblogsComponent } from './pages/reportedblogs/reportedblogs.component';
import { SearchComponent } from './pages/search/search.component';
import { FilterblogsbycategoryComponent } from './pages/filterblogsbycategory/filterblogsbycategory.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditblogComponent } from './pages/editblog/editblog.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { ViewblogComponent } from './pages/viewblog/viewblog.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
    path:"profile",
    component:MyprofileComponent
  },
  {
    path:"editprofile/:id",
    component:EditprofileComponent
  },
  {
    path:"editblog/:id",
    component:EditblogComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"createblog",
    component:CreateBlogComponent
  },
  {
    path:"viewblog/:id",
    component:ViewblogComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"category",
    component:FilterblogsbycategoryComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"report",
    component:ReportedblogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
