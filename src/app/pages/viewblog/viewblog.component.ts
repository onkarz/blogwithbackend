import { BlogService } from 'src/app/blog.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css'],
})
export class ViewblogComponent {
  blogId: any;
  blogDetails: any;

  constructor(private active: ActivatedRoute, private service: BlogService) {
    this.blogId = this.active.snapshot.params['id'];
    console.log(this.blogId);
    this.getBlogByItsId();
  }

  ngOnInIt() {}

  getBlogByItsId() {
    this.service.getBlogById(this.blogId).subscribe((data: any) => {
      console.log(data);

      this.blogDetails = data.blog;
      console.log(this.blogDetails);
    });
  }
}
