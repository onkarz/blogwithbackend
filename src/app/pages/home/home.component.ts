import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allBlogs: any;
  showLoader!: boolean;
  userData: any;
  loggedInUserId: any;
  isblogLiked: boolean = false;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private localStorageService: LocalstorageService
  ) {
    this.showLoader = false;
  }

  ngOnInit() {
    this.localStorageService.getData().subscribe((data) => {
      this.userData = JSON.parse(data);
      console.log(this.userData);
      if (this.userData) {
        this.loggedInUserId = this.userData.user._id;
      }
    });
    this.getBlogs();
  }

  getBlogs() {
    this.showLoader = true;
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.showLoader = false;
      this.allBlogs = data.blogs;
      console.log(this.allBlogs);
    });
  }

  likeBlog(id: any) {
    console.log(id);
    if (!this.isblogLiked) {
      this.blogService
        .postLikeBlog(id, this.loggedInUserId)
        .subscribe((res: any) => {
          console.log('Liked', res);
          this.isblogLiked = true;
          let blogs = this.allBlogs.map((data: any) => {
            if (data._id == id) {
              data = res.blog;
            }
            return data;
          });
          console.log('Blogs', blogs);
          this.allBlogs = blogs;
        });
    } else {
      this.blogService
        .postUnlikeBlog(id, this.loggedInUserId)
        .subscribe((res: any) => {
          console.log('Unliked', res);
          this.isblogLiked = false;
          let blogs = this.allBlogs.map((data: any) => {
            if (data._id == id) {
              data = res.blog;
            }
            return data;
          });
          console.log('Blogs', blogs);
          this.allBlogs = blogs;
        });
    }
  }

  view(blogId: any) {
    console.log(blogId);
    this.router.navigate(['/viewblog', blogId]);
  }
}
