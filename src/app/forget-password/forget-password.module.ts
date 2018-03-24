import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
