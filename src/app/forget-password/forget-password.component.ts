import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;
  loginAlert: string;

  constructor(
    private fb: FormBuilder
  ) {
    console.log('Forget Pass Page');
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : [null, Validators.required],
    });
  }

  forgetPassword(formData) {
    console.log(formData);
  }

}
