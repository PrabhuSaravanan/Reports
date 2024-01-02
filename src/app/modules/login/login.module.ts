import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule, HttpClientModule],
  exports: [LoginComponent],
  providers: [],
})
export class LoginModule {}
