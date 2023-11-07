import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateBlogComponent } from './pages/create-blog/create-blog.component';
import { ViewblogComponent } from './pages/viewblog/viewblog.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { EditblogComponent } from './pages/editblog/editblog.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FilterblogsbycategoryComponent } from './pages/filterblogsbycategory/filterblogsbycategory.component';
import { SearchComponent } from './pages/search/search.component';
import { ReportedblogsComponent } from './pages/reportedblogs/reportedblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateBlogComponent,
    ViewblogComponent,
    MyprofileComponent,
    EditprofileComponent,
    EditblogComponent,
    AdminComponent,
    FilterblogsbycategoryComponent,
    SearchComponent,
    ReportedblogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
