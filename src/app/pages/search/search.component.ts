import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  allBlogs: any;
  searchQuery: any;
  searchResults: any[] = [];
  showLoader!:boolean;
  showText! : boolean;

  constructor(private blogService: BlogService, private router: Router) {
    this.searchQuery = '';
    this.showLoader = false;
    this.showText = true;
  }

  ngOnInit() {
    this.searchQuery = '';
    this.getBlogs();
    this.onSearch();

  }

  getBlogs() {
    this.showLoader = true;
    this.showText = true;
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.showLoader = false;
      this.allBlogs = data.blogs;
      console.log(this.allBlogs);
      this.searchResults = this.allBlogs;
    });
  }



  view(blogId: any) {
    console.log(blogId);
    this.router.navigate(['/viewblog', blogId]);
  }

  onSearch() {

    this.searchResults = this.allBlogs;
    console.log(this.searchQuery);
    if (this.searchQuery === undefined || null || '') {
      this.showText = false;
      this.searchResults = this.allBlogs;
    }else
      this.searchResults = this.allBlogs.filter((blog: any) =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }
}
