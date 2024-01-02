import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, LayoutComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, MenuComponent, LayoutComponent],
  providers: [],
})
export class SharedModule {}
