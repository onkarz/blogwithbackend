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
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent {
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
      this.authorId = this.userData.user._id;
      console.log(this.authorId);
      this.author =
        this.userData.user.firstname + '' + this.userData.user.lastname;
      console.log(this.author);
    });

    // this.blogId = this.activeRoute.snapshot.params['id'];

    // console.log(this.blogId);
    // this.blogService.getBlogById(this.blogId).subscribe((data: any) => {
    //   console.log(data);
    // });
  }

  createBlog() {
    var blogModel = {
      title: this.title,
      description: this.description,
      category: this.category,
      imageUrl: this.imageUrl,
      author: this.author,
      authorId: this.authorId,
    };
    console.log(blogModel);

    this.blogService.postBlog(blogModel).subscribe((data: any) => {
      console.log('Blog posted Successfully', data);
      this.router.navigate(['/home']);
    });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Read the selected file as a data URL and set it as the image source
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }
}
