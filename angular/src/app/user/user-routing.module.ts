import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
  {path:'create',component:CreateUserComponent},
  {path:'list',component:MemberListComponent},
  {path:'edit/:id',component:EditMemberComponent},
  {path:'paypal/:id',component:PaypalComponent},







  { path: '**', redirectTo: '/user/dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
