import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../shared/angular-material-design/material.module';
import { SharedModule } from '../shared/shared.module';
import { FactorsComponent } from './factors/factors.component';
import { FirstFilterResultComponent } from './first-filter/first-filter-result/first-filter-result.component';
import { FirstFilterSelectionComponent } from './first-filter/first-filter-selection/first-selection.component';
import { FirstFilterComponent } from './first-filter/first-filter.component';
import { SecondFilterResultComponent } from './second-filter/second-filter-result/second-filter-result.component';
import { SecondFilterSelectionComponent } from './second-filter/second-filter-selection/second-filter-selection.component';
import { SecondFilterComponent } from './second-filter/second-filter.component';
import { ChartsModule } from 'ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

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
    NgbModule,
    ChartsModule,
    RouterModule.forChild(routers),
    NouisliderModule
  ],
  declarations: [
    FirstFilterResultComponent,
    FactorsComponent,
    FirstFilterComponent,
    FirstFilterSelectionComponent,
    SecondFilterComponent,
    SecondFilterSelectionComponent,
    SecondFilterResultComponent
  ]
})
export class FilterModule {}
