import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {NgxQRCodeModule  }from '@techiediaries/ngx-qrcode'
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CustomdatePipe } from './shared/pipes/customdate.pipe';
import { CustomtimePipe } from './shared/pipes/customtime.pipe';
import { ToastrModule } from 'ngx-toastr';
import { HttpreqInterceptor } from './core/interceptor/httpreq.interceptor';
import { HhtpserverdownInterceptor } from './core/hhtpserverdown.interceptor';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
  ],  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,FontAwesomeModule,RouterModule,
    ProgressSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FileUploadModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    AuthModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [

    MessageService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
