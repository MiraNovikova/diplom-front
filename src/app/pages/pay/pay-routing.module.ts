import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: PayComponent,
    children: [
      {
        path: 'auth',
        component: AuthComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
