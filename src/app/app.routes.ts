import { Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsageComponent } from './usage/usage.component';
import { SupportComponent } from './support/support.component';
import { InstancesComponent } from './instances/instances.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
   { path: '', redirectTo: '/billing', pathMatch: 'full' },
{ path: 'billing', component: BillingComponent },
 { path: 'administrators', component: AdministratorsComponent },
 {path:'dashboard',component:DashboardComponent},
 {path:'usage',component:UsageComponent},
 {path:'support',component:SupportComponent},
 {path:'instances',component:InstancesComponent},
 {path:'settings',component:SettingsComponent},
 {path:'**',pathMatch:'full',component:DashboardComponent}
 


];
