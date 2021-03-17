import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListItemComponent } from './crisis-list-item/crisis-list-item.component';
import { CrisisListComponent } from './crisis-list.component';


const crisisListRoutes: Routes = [
  {
    path: '',
    component: CrisisListComponent,
    children: [
      {
        path: 'item',
        component: CrisisListItemComponent
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(crisisListRoutes)],
  exports: [RouterModule]
})
export class CrisisListRoutingModule { }
