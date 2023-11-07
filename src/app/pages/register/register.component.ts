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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: any;
  password: any;
  firstname:any;
  lastname:any;
  confirmPassword:any;
  userData: any;

  registerForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
    firstname: new UntypedFormControl('', Validators.required),
    lastname: new UntypedFormControl('', Validators.required),
    confirmPassword : new UntypedFormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    public formbuilder: UntypedFormBuilder,
    private blogService: BlogService
  ) {}

  userSignUp() {
    console.log(this.registerForm.value);

    var registerModel = {
      email: this.email,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
    };

    console.log(registerModel);

    this.blogService.signUp(registerModel).subscribe((res: any) => {
      console.log('Sign up successfully', res);
      this.router.navigate(["/login"]);
    });
  }
}
