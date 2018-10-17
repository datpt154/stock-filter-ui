import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickGeneralComponent } from './quick-general/quick-general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routers: Routes = [
  { path: 'quickGeneral', component: QuickGeneralComponent },
  { path: '**', redirectTo: 'quickGeneral' }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routers)
  ],
  declarations: [QuickGeneralComponent]
})
export class ScreenModule { }
