import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickGeneralTableComponent } from 'src/app/modules/screen/quick-general/quick-general-table/quick-general-table.component';
import { CanslimComponent } from './canslim/canslim.component';
import { FisherComponent } from './fisher/fisher.component';
import { GrahamChecklistComponent } from './graham-checklist/graham-checklist.component';
import { GramhamNcavComponent } from './gramham-ncav/gramham-ncav.component';
import { GramhamNetComponent } from './gramham-net/gramham-net.component';
import { QuickGeneralComponent } from './quick-general/quick-general.component';
import { callNgModuleLifecycle } from '@angular/core/src/view/ng_module';
import { GrowthForecastComponent } from './growth-forecast/growth-forecast.component';

const routers: Routes = [
  { path: 'quickGeneral', component: QuickGeneralComponent, runGuardsAndResolvers: 'always' },
  { path: 'gramhamNet', component: GramhamNetComponent, runGuardsAndResolvers: 'always' },
  { path: 'gramhamNCav', component: GramhamNcavComponent, runGuardsAndResolvers: 'always' },
  { path: 'canslim', component: CanslimComponent },
  { path: 'fisher', component: FisherComponent },
  { path: 'grahamChecklist', component: GrahamChecklistComponent },
  { path: 'growth-forecast', component: GrowthForecastComponent },
  { path: '**', redirectTo: 'quickGeneral' }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routers)
  ],
  declarations: [
    QuickGeneralComponent, QuickGeneralTableComponent,
    GramhamNcavComponent, GramhamNetComponent, CanslimComponent,
    FisherComponent, GrahamChecklistComponent, GrowthForecastComponent
  ]
})
export class ScreenModule { }
