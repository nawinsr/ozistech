import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { FulluserComponent } from './user/fulluser/fulluser.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },


  { path: '', component: LoginComponent },
  {
    path: '', component: FulluserComponent, children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

    ],
  },




  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
