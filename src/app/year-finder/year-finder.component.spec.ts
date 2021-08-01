import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearFinderComponent } from './year-finder.component';

describe('YearFinderComponent', () => {
  let component: YearFinderComponent;
  let fixture: ComponentFixture<YearFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
