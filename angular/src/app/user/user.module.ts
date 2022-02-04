import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FulluserComponent } from './fulluser/fulluser.component';
import { UserTBarComponent } from './user-t-bar/user-t-bar.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { PaypalComponent } from './paypal/paypal.component';


@NgModule({
  declarations: [FulluserComponent, UserTBarComponent, CreateUserComponent, MemberListComponent, EditMemberComponent, PaypalComponent],
  imports: [
    CommonModule, SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
