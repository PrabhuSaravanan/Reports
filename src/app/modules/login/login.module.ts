import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule],
  exports: [LoginComponent],
  providers: [],
})
export class LoginModule {}
