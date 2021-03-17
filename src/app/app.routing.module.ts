import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisListModule } from './crisis-list/crisis-list.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerosListComponent } from './heros-list/heros-list.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'crisis',
    loadChildren: () => CrisisListModule,
  },
  {
    path: 'heros',
    component: HerosListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
