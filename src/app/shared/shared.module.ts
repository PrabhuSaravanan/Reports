import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, MenuComponent],
  providers: [],
})
export class SharedModule {}
