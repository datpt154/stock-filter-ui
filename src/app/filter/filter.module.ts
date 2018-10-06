import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFilterComponent } from './first-filter/first-filter.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactorsComponent } from './factors/factors.component';
import { SecondFilterComponent } from './second-filter/second-filter.component';
import { FirstFilterSelectionComponent } from './first-filter/first-filter-selection/first-selection.component';
import { SecondFilterSelectionComponent } from './second-filter/second-filter-selection/second-filter-selection.component';
import { SecondFilterResultComponent } from './second-filter/second-filter-result/second-filter-result.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { MaterialModule } from '../shared/angular-material-design/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

const routers: Routes = [
  { path: 'firstFilter', component: FirstFilterComponent },
  { path: 'secondFilter', component: SecondFilterComponent },
  { path: '**', redirectTo: 'firstFilter' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    SharedModule,
    Ng5SliderModule,
    NgbModule,
    RouterModule.forChild(routers)
  ],
  declarations: [
    FilterResultComponent,
    FactorsComponent,
    FirstFilterComponent,
    FirstFilterSelectionComponent,
    SecondFilterComponent,
    SecondFilterSelectionComponent,
    SecondFilterResultComponent
  ]
})
export class FilterModule {}
