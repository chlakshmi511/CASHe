import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { CustomerValidationComponenetComponent } from './customer-validation-componenet/customer-validation-componenet.component';
import { CustomerVerificationComponentComponent } from './customer-verification-component/customer-verification-component.component';

const appRoutes: Routes = [
  { path: 'customerValidation', component: CustomerValidationComponenetComponent },
  { path: 'customerVerification', component: CustomerVerificationComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerValidationComponenetComponent,
    CustomerVerificationComponentComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes,{enableTracing :true}

    ),
    NgDatepickerModule,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
