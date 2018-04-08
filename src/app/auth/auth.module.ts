import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    declarations: [LoginComponent, RegistrationComponent, AuthComponent],
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})

export class AuthModule {
    constructor() {}
}
