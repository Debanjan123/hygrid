import { NgModule } from '@angular/core';
import {
  DataTableModule,
  SharedModule
} from 'primeng/primeng';


@NgModule({
  imports: [
    DataTableModule,
    SharedModule
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    DataTableModule,
    SharedModule
  ]
})
export class SharedComponentModule { }
