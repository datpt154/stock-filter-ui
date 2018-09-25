import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDetailComponent } from './stock-detail.component';
import { StockDetailRoutes } from './stock-detail.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { ReportFinanceComponent } from './report-finance/report-finance.component';
import { ReportRatioComponent } from './report-ratio/report-ratio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // MaterialModule,
    SharedModule,
    StockDetailRoutes
  ],
  declarations: [
    StockDetailComponent, ReportOverviewComponent, ReportFinanceComponent, ReportRatioComponent
  ]
})
export class StockDetailModule { }
