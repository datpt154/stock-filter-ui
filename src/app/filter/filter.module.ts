import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialFilterComponent } from './financial-filter/financial-filter.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilterResultComponent } from './financial-filter/filter-result/filter-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactorsComponent } from './financial-filter/factors/factors.component';
import { FilterComponent } from './financial-filter/filter/filter.component';
import { NouisliderModule } from 'ng2-nouislider';

const routers: Routes = [
  {
    path: '', component: FinancialFilterComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NouisliderModule,
    RouterModule.forChild(routers)
  ],
  declarations: [FilterResultComponent, FactorsComponent, FinancialFilterComponent, FilterComponent]
})
export class FilterModule { }
