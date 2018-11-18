import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './business.service/filter.service';
import { HelperService } from './business.service/helper.service';
import { GoogleAnalyticsEventsService } from './business.service/GoogleAnalyticsEvents.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [FilterService, HelperService, GoogleAnalyticsEventsService],
  declarations: []
})
export class ServicesModule { }
