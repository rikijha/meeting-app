import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserDetailComponent } from './all-user-detail.component';

describe('AllUserDetailComponent', () => {
  let component: AllUserDetailComponent;
  let fixture: ComponentFixture<AllUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
