import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './business.service/filter.service';
import { GoogleChartsBaseService } from 'src/app/services/google-chart.service/google-charts.base.service';
import { GooglePieChartService } from 'src/app/services/google-chart.service/google-pie-chart.service';
import { GoogleColumnChartService } from './google-chart.service/google-column-chart.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [FilterService, GoogleChartsBaseService, 
    GooglePieChartService, GoogleColumnChartService],
  declarations: []
})
export class ServicesModule { }