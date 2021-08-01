import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoTypescriptComponent } from './exo-typescript.component';

describe('ExoTypescriptComponent', () => {
  let component: ExoTypescriptComponent;
  let fixture: ComponentFixture<ExoTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoTypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
