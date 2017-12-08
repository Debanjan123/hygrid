import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../core/home/home.component';
import { HFADataBaseComponent } from './HFADataBase.component';
import { HFADataBaseEntryComponent } from './hfadata-base-entry/hfadata-base-entry.component';

export const reportRoutes: Routes = [
  {
    path: 'hfaDatabase',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HFADataBaseComponent,
      },
      {
        path: 'add',
        component: HFADataBaseEntryComponent
      }
    ]
  }
];
export const hfaDataBaseRouting: ModuleWithProviders = RouterModule.forChild(reportRoutes);
