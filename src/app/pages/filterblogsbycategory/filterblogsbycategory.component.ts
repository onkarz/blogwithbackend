import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-filterblogsbycategory',
  templateUrl: './filterblogsbycategory.component.html',
  styleUrls: ['./filterblogsbycategory.component.css'],
})
export class FilterblogsbycategoryComponent {
  allBlogs: any;
  allUsers: any;
  selectedCategories: string[] = [];
  category: any;

  @Output() categoryChange = new EventEmitter<string[]>();
  filteredBlogs: any;
  blogs: any;
  selectedCategory: any;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit() {
    this.getBlogs();
  }

  onCategoryChange() {
    this.categoryChange.emit(this.selectedCategories);
  }

  getBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.allBlogs = data.blogs;
      this.filteredBlogs = data.blogs;
      console.log(this.allBlogs);
    });
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.filteredBlogs = this.allBlogs;
      console.log(this.filteredBlogs);
    } else {
      this.filteredBlogs = this.allBlogs.filter((blog:any) => blog.category === category);
      console.log(this.filteredBlogs);
    }
    this.selectedCategory = category;
  }

}
