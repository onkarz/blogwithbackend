import { LocalstorageService } from './../../localstorage.service';
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
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
  });
  userData: any;

  constructor(
    private router: Router,
    public formbuilder: UntypedFormBuilder,
    private blogService: BlogService,
    private localStorageService: LocalstorageService
  ) {}

  userSignIn() {
    console.log(this.loginForm.value);

    this.blogService.signIn(this.loginForm.value).subscribe((res: any) => {
      console.log('Sign In successfully', res);

      this.userData = res;
      console.log(this.userData);
      this.localStorageService.setData(JSON.stringify(this.userData));
      
      this.router.navigate(['/createblog']);
    });
  }
}
