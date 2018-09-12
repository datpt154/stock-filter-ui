import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SharePricesComponent } from './share-prices/share-prices.component';
import { ServicesModule } from './services/services.module';
import { FormsModule } from '@angular/forms';

const routers: Routes = [
  { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
  { path: 'sharePrices', component: SharePricesComponent },
  { path: '**', redirectTo: 'filter' }
];
@NgModule({
  declarations: [
    AppComponent,
    SharePricesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ServicesModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
