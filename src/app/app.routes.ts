import { Routes } from '@angular/router';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Dashboard } from './pages/dashboard/dashboard';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard }
    ]
  }
];
