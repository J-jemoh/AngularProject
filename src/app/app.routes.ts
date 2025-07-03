import { Routes } from '@angular/router';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login'; // 👈 import login component

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 👈 change default to login
  { path: 'login', component: Login }, // 👈 add login route
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard }
    ]
  }
];
