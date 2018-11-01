/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwingTradeComponent } from './swing-trade.component';

describe('SwingTradeComponent', () => {
  let component: SwingTradeComponent;
  let fixture: ComponentFixture<SwingTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
