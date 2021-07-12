import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagertportalComponent } from './managertportal.component';

describe('ManagertportalComponent', () => {
  let component: ManagertportalComponent;
  let fixture: ComponentFixture<ManagertportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagertportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagertportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
