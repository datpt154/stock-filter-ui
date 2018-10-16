import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './shared/angular-material-design/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng5SliderModule } from 'ng5-slider';
import { HomePageComponent } from './home-page/home-page.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginPageComponent } from './login-page/login-page.component';

const routers: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
  { path: 'stock-detail', loadChildren: './stock-detail/stock-detail.module#StockDetailModule' },
  { path: 'indicators', component: IndicatorsComponent},
  { path: '**', redirectTo: 'filter' }
];
@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      IndicatorsComponent,
      LoginPageComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NgbModule,
      MaterialModule,
      AngularFontAwesomeModule,
      Ng5SliderModule,
      BrowserAnimationsModule,
      SharedModule,
      HttpClientModule,
      ServicesModule,
      PdfViewerModule,
      RouterModule.forRoot(routers),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
