import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickGeneralComponent } from './quick-general/quick-general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickGeneralTableComponent } from './quick-general-table/quick-general-table.component';

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
  declarations: [QuickGeneralComponent, QuickGeneralTableComponent]
})
export class ScreenModule { }
