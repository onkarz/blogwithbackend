import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent {
  userData: any;
  firstName: any;
  lastName: any;
  userEmail: any;
  myBlogs: any;
  userId: any;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit() {
    this.localStorageService.getData().subscribe((data) => {
      this.userData = JSON.parse(data);
      console.log(this.userData);
      if (this.userData) {
        this.firstName = this.userData.user.firstname;
        this.lastName = this.userData.user.lastname;
        this.userEmail = this.userData.user.email;
        this.userId = this.userData.user._id;
        console.log(this.userId);
      }
    });

    this.getUserBlogs();
  }

  getUserBlogs() {
    this.blogService.getBlogsOfUser(this.userId).subscribe((data: any) => {
      this.myBlogs = data.blog;
      console.log(this.myBlogs);
    });
  }

  editBlog(id: any) {
    console.log(id);
    this.router.navigate(['/editblog', id]);
  }

  editProfile(id: any) {
    console.log(id);
    this.router.navigate(['/editprofile', id]);
  }

  view(blogId: any) {
    console.log(blogId);
    this.router.navigate(['/viewblog', blogId]);
  }
}
