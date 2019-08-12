import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '', component: CustomerLayoutComponent, children: [
            { path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
