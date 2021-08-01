import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArenaComponent } from './form-arena.component';

describe('FormArenaComponent', () => {
  let component: FormArenaComponent;
  let fixture: ComponentFixture<FormArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
