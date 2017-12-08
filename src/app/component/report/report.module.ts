import { NgModule } from '@angular/core';

import { ReportComponent } from './report.component';
import { reportRouting } from './report.routing';

@NgModule({
    imports: [reportRouting],
    declarations: [
        ReportComponent
    ],
    providers: []
})

export class ReportModule { }
