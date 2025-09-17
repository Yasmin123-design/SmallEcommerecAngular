import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', redirectTo: 'login' }
];
