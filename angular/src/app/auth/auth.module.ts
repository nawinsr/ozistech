import { NgModule } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

// AoT requires an exported function for factories
//This is needed for internationalization
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    LoginComponent,
  
  ],
  imports: [
    CommonModule,FontAwesomeModule,ReactiveFormsModule,
    FormsModule,SharedModule,RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    ],
  exports: [
    LoginComponent,
  ],
  providers: [AuthService]

})

export class AuthModule { }
