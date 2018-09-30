import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ReportFinanceComponent } from './report-finance/report-finance.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { ReportRatioComponent } from './report-ratio/report-ratio.component';
import { StockDetailComponent } from './stock-detail.component';
import { StockDetailRoutes } from './stock-detail.routing';
import { ReportSmallTableComponent } from './report-small-table/report-small-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
    SharedModule,
    StockDetailRoutes
  ],
  declarations: [
    StockDetailComponent, ReportOverviewComponent, ReportFinanceComponent,
    ReportRatioComponent, ReportSmallTableComponent
  ]
})
export class StockDetailModule { }
