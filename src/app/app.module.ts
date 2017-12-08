
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { MenuItem } from 'primeng/components/common/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

/* routing */
import { routing } from './app.routing';

/* core */
import {
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  LeftPanelComponent,
  LoginComponent,
  AuthenticationService,
  LocalStorageService,
} from './core';

/* shared service */
import { RouteService } from './shared/index';

/* report */
import { SharedComponentModule } from './component/shared/shared.module';
import { ReportModule } from './component/report/report.module';
import { HFADataBaseModule } from './component/HFADataBase/HFADataBase.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LeftPanelComponent,
    LoginComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    routing,
    ReportModule,
    HFADataBaseModule,
    SharedComponentModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    Http,
    RouteService,
    AuthenticationService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
