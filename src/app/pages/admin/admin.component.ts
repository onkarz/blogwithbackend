import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  allBlogs: any;
  allUsers: any;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.getBlogs();
    this.getUsers();
  }

  getBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.allBlogs = data.blogs;
      console.log(this.allBlogs);
    });
  }

  getUsers() {
    this.blogService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data;
      console.log(this.allUsers);
    });
  }

  editBlog(id: any) {
    console.log(id);
    this.router.navigate(['/editblog', id]);
  }

  deleteBlog(id: any) {
    console.log(id);
    this.blogService.deleteBlog(id).subscribe((data: any) => {
      console.log('Blog deleted successfully');
      location.reload();
    });
  }

  deleteUser(id: any) {
    console.log(id);
    this.blogService.deleteUser(id).subscribe((data: any) => {
      console.log('User deleted successfully');
      location.reload();
    });
  }

  editProfile(id: any) {
    console.log(id);
    this.router.navigate(['/editprofile', id]);
  }
}
