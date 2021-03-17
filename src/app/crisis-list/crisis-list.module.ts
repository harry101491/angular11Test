import { NgModule } from '@angular/core';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisListRoutingModule } from './crisis-list.routing';
import { CrisisListItemComponent } from './crisis-list-item/crisis-list-item.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisListItemComponent
  ],
  imports: [
    CrisisListRoutingModule
  ],
  exports: [
    CrisisListComponent
  ],
})
export class CrisisListModule {}
