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
import { HomePageComponent } from './home-page/home-page.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginPageComponent } from './login-page/login-page.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';

const routers: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
  { path: 'screen', loadChildren: './modules/screen/screen.module#ScreenModule' },
  { path: 'ptkt', loadChildren: './modules/ptkt/ptkt.module#PtktModule' },
  { path: 'stock-detail', loadChildren: './stock-detail/stock-detail.module#StockDetailModule' },
  { path: 'guide', loadChildren: './modules/guide/guide.module#GuideModule' },
  { path: 'news', loadChildren: './modules/news/news.module#NewsModule' },
  { path: '**', redirectTo: 'filter' }
];

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('513462605172-t92vuah13jnp529gjkt384mvl5uormg9.apps.googleusercontent.com')
  }
]);

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      LoginPageComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      NgbModule,
      MaterialModule,
      AngularFontAwesomeModule,
      BrowserAnimationsModule,
      SharedModule,
      HttpClientModule,
      ServicesModule,
      PdfViewerModule,
      SocialLoginModule.initialize(config),
      RouterModule.forRoot(routers),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
