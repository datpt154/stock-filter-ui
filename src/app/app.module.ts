import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular4-social-login';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {reducers} from './redux/reducers';
import {HttpconfigInterceptorService} from './services/api.service/httpconfig-interceptor.service';
import {ServicesModule} from './services/services.module';
import {MaterialModule} from './shared/angular-material-design/material.module';
import {SharedModule} from './shared/shared.module';

const routers: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'filter', loadChildren: './modules/filter/filter.module#FilterModule'},
  {path: 'screen', loadChildren: './modules/screen/screen.module#ScreenModule'},
  {path: 'ptkt', loadChildren: './modules/ptkt/ptkt.module#PtktModule'},
  {path: 'stock-detail', loadChildren: './stock-detail/stock-detail.module#StockDetailModule'},
  {path: 'guide', loadChildren: './modules/guide/guide.module#GuideModule'},
  {path: 'news', loadChildren: './modules/news/news.module#NewsModule'},
  {path: '**', redirectTo: 'filter'},
];

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    // server
    // provider: new GoogleLoginProvider('513462605172-88v3v6fheuogvduuooq1f8ljbshls7gm.apps.googleusercontent.com')
    // local
    provider: new GoogleLoginProvider('513462605172-t92vuah13jnp529gjkt384mvl5uormg9.apps.googleusercontent.com'),
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MaterialModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ServicesModule,
    PdfViewerModule,
    StoreModule.forRoot(reducers),
    SocialLoginModule.initialize(config),
    RouterModule.forRoot(routers, {enableTracing: true}),
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptorService, multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
