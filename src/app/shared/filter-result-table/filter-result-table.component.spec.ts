import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResultTableComponent } from './filter-result-table.component';

describe('FilterResultTableComponent', () => {
  let component: FilterResultTableComponent;
  let fixture: ComponentFixture<FilterResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
