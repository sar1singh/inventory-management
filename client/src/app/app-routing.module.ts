import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full',component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full',component: DashboardComponent ,canActivate:[AuthGuard]},
  { path: 'product', loadChildren: () => import(`../app/product/product.module`).then(m => m.ProductModule),canActivate:[AuthGuard]},
  { path: '',pathMatch: 'full', redirectTo:'dashboard' },
  // { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
