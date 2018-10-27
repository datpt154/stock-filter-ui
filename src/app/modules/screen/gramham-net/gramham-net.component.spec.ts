/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GramhamNetComponent } from './gramham-net.component';

describe('GramhamNetComponent', () => {
  let component: GramhamNetComponent;
  let fixture: ComponentFixture<GramhamNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramhamNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GramhamNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
