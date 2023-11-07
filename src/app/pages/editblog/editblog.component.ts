import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { LocalstorageService } from 'src/app/localstorage.service';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css'],
})
export class EditblogComponent {
  title: any;
  description: any;
  body: any;
  tags: any;
  userData: any;
  category: any;
  imageUrl: any;

  blogForm = new UntypedFormGroup({
    title: new UntypedFormControl('', [Validators.required, Validators.email]),
    description: new UntypedFormControl('', Validators.required),
    image: new UntypedFormControl('', Validators.required),
    category: new UntypedFormControl('', Validators.required),
  });
  authorId: any;
  author: any;
  blogId: any;
  blog: any;

  constructor(
    private router: Router,
    public formbuilder: UntypedFormBuilder,
    private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit() {
    this.localStorageService.getData().subscribe((data) => {
      this.userData = JSON.parse(data);
      console.log(this.userData);
      if (this.userData) {
        this.authorId = this.userData.user._id;
        console.log(this.authorId);

        this.author =
          this.userData.user.firstname + '' + this.userData.user.lastname;

        console.log(this.author);
      }
    });

    this.blogId = this.activeRoute.snapshot.params['id'];

    console.log(this.blogId);
    this.blogService.getBlogById(this.blogId).subscribe((data: any) => {
      console.log(data);

      this.blog = data.blog;
    });
  }

  updateBlog() {
    var blogModel = {
      title: this.blog.title,
      description: this.blog.description,
      category: this.blog.category,
      imageUrl: this.blog.imageUrl,
      author: this.blog.author,
      authorId: this.blog.authorId,
    };
    console.log(blogModel);

    this.blogService
      .updateBlog(this.blogId, blogModel)
      .subscribe((data: any) => {
        console.log('Blog updated Successfully', data);
        this.router.navigate(['/profile']);
      });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Read the selected file as a data URL and set it as the image source
      const reader = new FileReader();
      reader.onload = (e) => {
        this.blog.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }
}
