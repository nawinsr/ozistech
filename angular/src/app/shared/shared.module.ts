import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CustomdatePipe } from './pipes/customdate.pipe';
import { CustomtimePipe } from './pipes/customtime.pipe';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkeletonModule } from 'primeng/skeleton';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {SidebarModule} from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import {TooltipModule} from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {MessageModule} from 'primeng/message';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SplitterModule} from 'primeng/splitter';
import {CheckboxModule} from 'primeng/checkbox';
import { IfellipsisDirective } from './directives/ifellipsis.directive';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [

    CustomdatePipe,
    CustomtimePipe,
    SearchPipe,
    IfellipsisDirective,
  ],
  imports: [
    CommonModule,
    UiSwitchModule,
    TableModule,
    SidebarModule,
    CheckboxModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
    SplitterModule,
    CardModule,
     SkeletonModule,
     ChartModule,
    ButtonModule,
     ReactiveFormsModule,
     TabViewModule,
    MenubarModule,
    TooltipModule,
    TieredMenuModule,
    MessagesModule,

    InputTextareaModule,
    FontAwesomeModule,
    DropdownModule,
    ProgressSpinnerModule,
    MessageModule,
    DynamicDialogModule,
    // NgxSpinnerModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    TableModule,
    SidebarModule,
    CheckboxModule,
    CustomdatePipe,
    InputTextModule,
    CustomtimePipe,
    TabViewModule,
    SkeletonModule,
    CardModule,
    TooltipModule,
    ReactiveFormsModule,
    ChartModule,
    IfellipsisDirective,
    UiSwitchModule,
    CalendarModule,
    ButtonModule,
    FontAwesomeModule,
    DropdownModule,
    InputTextareaModule,
    SplitterModule,
    SearchPipe,
    MessagesModule,
    DialogModule,
    ProgressSpinnerModule,
    MessageModule,
    DynamicDialogModule
    // NgxSpinnerModule,

  ],
  providers: [AuthService],
  bootstrap: []
})
export class SharedModule { }
