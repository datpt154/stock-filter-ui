/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BreakSupportComponent } from './break-support.component';

describe('BreakSupportComponent', () => {
  let component: BreakSupportComponent;
  let fixture: ComponentFixture<BreakSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
