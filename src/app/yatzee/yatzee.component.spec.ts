import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YatzeeComponent } from './yatzee.component';

describe('YatzeeComponent', () => {
  let component: YatzeeComponent;
  let fixture: ComponentFixture<YatzeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YatzeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YatzeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
