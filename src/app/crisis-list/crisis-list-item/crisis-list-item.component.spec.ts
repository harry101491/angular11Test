import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisListItemComponent } from './crisis-list-item.component';

describe('CrisisListItemComponent', () => {
  let component: CrisisListItemComponent;
  let fixture: ComponentFixture<CrisisListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
