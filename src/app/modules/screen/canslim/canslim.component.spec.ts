/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanslimComponent } from './canslim.component';

describe('CanslimComponent', () => {
  let component: CanslimComponent;
  let fixture: ComponentFixture<CanslimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanslimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanslimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
