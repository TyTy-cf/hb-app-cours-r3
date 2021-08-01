import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepBattlegroundComponent } from './prep-battleground.component';

describe('PrepBattlegroundComponent', () => {
  let component: PrepBattlegroundComponent;
  let fixture: ComponentFixture<PrepBattlegroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepBattlegroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepBattlegroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
