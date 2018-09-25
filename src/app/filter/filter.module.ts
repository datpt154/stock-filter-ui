import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFilterComponent } from './first-filter/first-filter.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { FactorsComponent } from './factors/factors.component';
import { SecondFilterComponent } from './second-filter/second-filter.component';
import { FirstFilterSelectionComponent } from './first-filter/first-filter-selection/first-selection.component';
import { SecondFilterSelectionComponent } from './second-filter/second-filter-selection/second-filter-selection.component';
import { SecondFilterResultComponent } from './second-filter/second-filter-result/second-filter-result.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { MaterialModule } from '../shared/angular-material-design/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NouisliderModule,
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
