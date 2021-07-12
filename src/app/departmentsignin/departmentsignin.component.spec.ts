import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsigninComponent } from './departmentsignin.component';

describe('DepartmentsigninComponent', () => {
  let component: DepartmentsigninComponent;
  let fixture: ComponentFixture<DepartmentsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
