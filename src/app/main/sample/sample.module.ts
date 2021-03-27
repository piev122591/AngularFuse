import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { SampleComponent } from "./sample.component";
import { AuthService } from "app/core/guard/auth.service";
import { CompanyComponent } from "../company/company.component";
import { CompanyViewComponent } from "../company/company-view/company-view.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
    {
        path: "",
        component: SampleComponent,
        canActivate: [AuthService],
    },
    {
        path: "company",
        component: CompanyComponent,
        canActivate: [AuthService],
    },
];

@NgModule({
    declarations: [SampleComponent, CompanyComponent, CompanyViewComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [SampleComponent, CompanyComponent, CompanyViewComponent],
})
export class SampleModule {}
