import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosListComponent } from './heros-list.component';

describe('HerosListComponent', () => {
  let component: HerosListComponent;
  let fixture: ComponentFixture<HerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
