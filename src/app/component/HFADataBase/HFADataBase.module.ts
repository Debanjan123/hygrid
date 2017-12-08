import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HFADataBaseComponent } from './HFADataBase.component';
import { hfaDataBaseRouting } from './HFADataBase.routing';
import {SharedComponentModule} from '../shared/shared.module';
import { HFADataBaseEntryComponent } from './hfadata-base-entry/hfadata-base-entry.component';

@NgModule({
  imports: [
    hfaDataBaseRouting,
    SharedComponentModule,
    BrowserModule
  ],
  declarations: [
    HFADataBaseComponent,
    HFADataBaseEntryComponent
  ],
  providers: []
})

export class HFADataBaseModule { }
