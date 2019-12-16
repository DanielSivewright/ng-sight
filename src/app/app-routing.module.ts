import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './views/section-sales/section-sales.component';
import { SectionHealthComponent } from './views/section-health/section-health.component';
import { SectionOrdersComponent } from './views/section-orders/section-orders.component';


const routes: Routes = [
  { path: 'sales', component:  SectionSalesComponent},
  { path: 'orders', component:  SectionOrdersComponent},
  { path: 'health', component:  SectionHealthComponent},

  { path: '', redirectTo: '/sales', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
