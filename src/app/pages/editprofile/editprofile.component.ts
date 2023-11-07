import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  UntypedFormBuilder,
  FormControlName,
  ValidatorFn,
  AbstractControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { LocalstorageService } from 'src/app/localstorage.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent {
  email: any;
  password: any;
  firstname: any;
  lastname: any;
  confirmPassword: any;
  userData: any;

  registerForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
    firstname: new UntypedFormControl('', Validators.required),
    lastname: new UntypedFormControl('', Validators.required),
    confirmPassword: new UntypedFormControl('', Validators.required),
  });
  userId: any;
  userDetails: any;
  data: any;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    private localStorageService: LocalstorageService
  ) {}

  ngOnInit() {
    this.localStorageService.getData().subscribe((data) => {
      this.userData = JSON.parse(data);
      console.log(this.userData);
      if (this.userData) {
      }
    });

    this.userId = this.activeRoute.snapshot.params['id'];
    console.log(this.userId);
    this.blogService.getUserById(this.userId).subscribe((data: any) => {
      console.log(data);

      this.userDetails = data;
    });
  }

  updateUserProfile() {
    var userModel = {
      email: this.userDetails.email,
      password: this.userDetails.password,
      firstname: this.userDetails.firstname,
      lastname: this.userDetails.lastname,
    };

    console.log(userModel);

    this.blogService
      .updateUser(this.userId, userModel)
      .subscribe((res: any) => {
        console.log('User Updated successfully', res);
        const data = JSON.parse(localStorage.getItem('your_key') || '');
        this.userData = data;
        console.log(this.userData);
        this.data = this.userData;
        this.data.user = res;
        console.log('Data', this.data);
        this.localStorageService.setData(JSON.stringify(this.data));
        this.router.navigate(['/profile']);
      });
  }
}
