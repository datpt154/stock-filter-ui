import { Routes, RouterModule } from '@angular/router';
import { StockDetailComponent } from './stock-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StockDetailComponent
  }
];

export const StockDetailRoutes = RouterModule.forChild(routes);
