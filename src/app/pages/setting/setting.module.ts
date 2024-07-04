import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    TabViewModule,
    TableModule,
    TreeTableModule,
    ToastModule
  ]
})
export class SettingModule { }
