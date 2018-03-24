import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;
  loginAlert: string;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    console.log('Login Page');
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  login(loginData) {
    console.log(loginData);
  }

  gotoForget () {
    this.router.navigate(['/forget']);
  }

}
