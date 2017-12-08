import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from '../shared/guards';
import { HomeComponent } from '../../core/home/home.component';
import { ReportComponent } from './report.component';
// import { ProjectComponent } from './index';
// import { ProjectOnsiteComponent, ProjectSafetyComponent, QAFormComponent } from './index'

export const reportRoutes: Routes = [
  {
    path: 'report',
     component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ReportComponent,
      }
    //   ,
    //   {
    //     path: 'dashboard',
    //     component: ProjectComponent,
    //   },
    //   {
    //     path: ':projectId/onsite',
    //     component: ProjectOnsiteComponent
    //   },
    //   {
    //     path: ':projectId/safety',
    //     component: ProjectSafetyComponent
    //   },
    //   {
    //     path: ':projectId/QA-form',
    //     component: QAFormComponent
    //   }
    ]
  }
];
export const reportRouting: ModuleWithProviders = RouterModule.forChild(reportRoutes);
