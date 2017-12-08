import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/index';
import { LoginComponent } from './core/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent,
    children: [

    ]
  },


  // otherwise redirect to product
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
