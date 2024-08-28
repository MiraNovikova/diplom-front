import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages'
import { ConfigService } from './pages/service/config/config.service';
import { RestInterceptorService } from './pages/service/interceptor/rest-interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    TableModule,
    TreeTableModule,
    ToastModule,
    MessagesModule
  ],
  providers: [
    ConfigService,
    {provide: HTTP_INTERCEPTORS, useClass: RestInterceptorService, multi: true},
    { provide: LOCALE_ID, useValue: 'ru' },
    {provide: MessageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
