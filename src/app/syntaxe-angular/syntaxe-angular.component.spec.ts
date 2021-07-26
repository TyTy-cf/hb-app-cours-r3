import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxeAngularComponent } from './syntaxe-angular.component';

describe('SyntaxeAngularComponent', () => {
  let component: SyntaxeAngularComponent;
  let fixture: ComponentFixture<SyntaxeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyntaxeAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
