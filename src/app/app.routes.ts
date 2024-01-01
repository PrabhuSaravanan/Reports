import { Routes } from '@angular/router';

import { LoginComponent } from './modules/login/components/login.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
