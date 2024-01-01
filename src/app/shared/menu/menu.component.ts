import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  icon?: string;
  route?: string;
  submenus?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public menuItems = [
    {
      title: 'Dashboard',
      icon: '',
      route: '/dashboard',
      expanded: false,
    },
    {
      title: 'Reports',
      icon: '',
      submenus: [{ title: 'Users Report', route: '' }],
      expanded: false,
    },
  ] as MenuItem[];

  toggleSubmenu(menu: MenuItem): void {
    menu.expanded = !menu.expanded;
  }
}
