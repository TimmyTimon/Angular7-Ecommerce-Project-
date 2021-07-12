import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptportalComponent } from './deptportal.component';

describe('DeptportalComponent', () => {
  let component: DeptportalComponent;
  let fixture: ComponentFixture<DeptportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
