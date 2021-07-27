import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxeAngularCoursComponent } from './syntaxe-angular-cours.component';

describe('SyntaxeAngularCoursComponent', () => {
  let component: SyntaxeAngularCoursComponent;
  let fixture: ComponentFixture<SyntaxeAngularCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyntaxeAngularCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxeAngularCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
