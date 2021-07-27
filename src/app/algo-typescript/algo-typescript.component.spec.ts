import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoTypescriptComponent } from './algo-typescript.component';

describe('AlgoTypescriptComponent', () => {
  let component: AlgoTypescriptComponent;
  let fixture: ComponentFixture<AlgoTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoTypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
