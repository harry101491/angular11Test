import { Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Inject({
  providedIn: 'root'
})
export class AppService implements OnDestroy {
  public dataSubject$ = new BehaviorSubject([]);

  constructor() {
    console.log('[AppService] [Constructor]');
  }

  ngOnDestroy() {
    console.log('[AppService] [OnDestroy]');
  }
}
