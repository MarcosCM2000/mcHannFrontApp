import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shipments',
    loadChildren: () => import('./Shipments/shipments.module').then(m => m.ShipmentsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./Users/users.module').then(m => m.UsersModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
