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
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import { reducers } from './redux/reducers';
import { StoreModule } from '@ngrx/store';

const routers: Routes = [
  { path: '', component: HomePageComponent, runGuardsAndResolvers: 'always' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterModule', runGuardsAndResolvers: 'always'  },
  { path: 'screen', loadChildren: './modules/screen/screen.module#ScreenModule', runGuardsAndResolvers: 'always'  },
  { path: 'ptkt', loadChildren: './modules/ptkt/ptkt.module#PtktModule', runGuardsAndResolvers: 'always'  },
  { path: 'stock-detail', loadChildren: './stock-detail/stock-detail.module#StockDetailModule', runGuardsAndResolvers: 'always'  },
  { path: 'guide', loadChildren: './modules/guide/guide.module#GuideModule', runGuardsAndResolvers: 'always'  },
  { path: 'news', loadChildren: './modules/news/news.module#NewsModule', runGuardsAndResolvers: 'always'  },
  { path: '**', redirectTo: 'filter', runGuardsAndResolvers: 'always'  }
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
      StoreModule.forRoot(reducers),
      SocialLoginModule.initialize(config),
      // RouterModule.forRoot(routers),
      RouterModule.forRoot(routers, {onSameUrlNavigation: 'reload'}),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
