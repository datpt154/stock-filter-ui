/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GramhamNcavComponent } from './gramham-ncav.component';

describe('GramhamNcavComponent', () => {
  let component: GramhamNcavComponent;
  let fixture: ComponentFixture<GramhamNcavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramhamNcavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GramhamNcavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
