import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ServicesModule } from '../services/services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterResultTableComponent } from './filter-result-table/filter-result-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    ServicesModule,
    HeaderComponent,
    PaginationComponent,
    FilterResultTableComponent
  ],
  declarations: [
    HeaderComponent,
    PaginationComponent,
    FilterResultTableComponent
  ]
})
export class SharedModule { }
