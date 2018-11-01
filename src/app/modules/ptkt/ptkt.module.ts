import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreakResistanceComponent } from './break-resistance/break-resistance.component';
import { BreakSupportComponent } from './break-support/break-support.component';
import { SwingTradeComponent } from './swing-trade/swing-trade.component';

const routers: Routes = [
  { path: 'breakResistance', component: BreakResistanceComponent },
  { path: 'breakSupport', component: BreakSupportComponent },
  { path: 'swingTrade', component: SwingTradeComponent },
  { path: '**', redirectTo: 'breakResistance' }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routers)
  ],
  declarations: [BreakSupportComponent, BreakResistanceComponent, SwingTradeComponent]
})
export class PtktModule { }
