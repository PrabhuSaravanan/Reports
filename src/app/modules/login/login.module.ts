import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [HttpClientModule, ReactiveFormsModule],
  exports: [LoginComponent],
  providers: [],
})
export class LoginModule {}
