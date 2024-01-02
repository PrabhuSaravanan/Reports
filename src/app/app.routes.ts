import { Routes } from '@angular/router';

import { LoginComponent } from './modules/login/components/login.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';
import { UsersReportComponent } from './modules/reports/components/users-report/users-report.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'reports',
    component: LayoutComponent,
    children: [
      {
        path: 'users-report',
        component: UsersReportComponent,
      },
    ],
  },
];
