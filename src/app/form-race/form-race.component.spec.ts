import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRaceComponent } from './form-race.component';

describe('FormRaceComponent', () => {
  let component: FormRaceComponent;
  let fixture: ComponentFixture<FormRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
