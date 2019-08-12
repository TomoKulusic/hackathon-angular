import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    declarations: [LoginComponent, CustomerLayoutComponent],
    providers: [],
    entryComponents: []
})
export class CustomerModule {
    
}