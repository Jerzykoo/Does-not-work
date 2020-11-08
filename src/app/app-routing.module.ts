import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
