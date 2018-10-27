/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FisherComponent } from './fisher.component';

describe('FisherComponent', () => {
  let component: FisherComponent;
  let fixture: ComponentFixture<FisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
