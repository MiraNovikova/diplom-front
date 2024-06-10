import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {MessageService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AuthorizationComponent,
    RegistrationComponent,
   AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    CheckboxModule
  ],
  providers: [MessageService]
})
export class AuthModule { }
