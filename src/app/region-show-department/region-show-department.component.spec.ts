import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionShowDepartmentComponent } from './region-show-department.component';

describe('RegionShowDepartmentComponent', () => {
  let component: RegionShowDepartmentComponent;
  let fixture: ComponentFixture<RegionShowDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionShowDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionShowDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
