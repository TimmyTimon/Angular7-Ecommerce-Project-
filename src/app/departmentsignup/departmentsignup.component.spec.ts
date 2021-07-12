import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsignupComponent } from './departmentsignup.component';

describe('DepartmentsignupComponent', () => {
  let component: DepartmentsignupComponent;
  let fixture: ComponentFixture<DepartmentsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
