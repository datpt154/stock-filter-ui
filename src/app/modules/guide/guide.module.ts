import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { IndicatorsComponent } from './indicators/indicators.component';

const routers: Routes = [
  { path: 'userGuide', component: UserGuideComponent },
  { path: 'indicators', component: IndicatorsComponent },
  { path: '**', redirectTo: 'userGuide' }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routers)
  ],
  declarations: [
    IndicatorsComponent,
    UserGuideComponent
  ]
})
export class GuideModule { }
