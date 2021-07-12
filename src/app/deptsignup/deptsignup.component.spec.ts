import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptsignupComponent } from './deptsignup.component';

describe('DeptsignupComponent', () => {
  let component: DeptsignupComponent;
  let fixture: ComponentFixture<DeptsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
