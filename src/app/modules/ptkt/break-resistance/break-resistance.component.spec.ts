/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreakResistanceComponent } from './break-resistance.component';

describe('BreakResistanceComponent', () => {
  let component: BreakResistanceComponent;
  let fixture: ComponentFixture<BreakResistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakResistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
