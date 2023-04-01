import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent } from './models.component';

const routes: Routes = [{
  path: '', component: ModelsComponent,
  children: [
    {
      path: '',
      redirectTo: 'shipments',
      pathMatch: 'full'
    },
    {
      path: 'shipments',
      loadChildren: () => import('./Shipments/shipments.module').then(m => m.ShipmentsModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./Users/users.module').then(m => m.UsersModule)
    },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
