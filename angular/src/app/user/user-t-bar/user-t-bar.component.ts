import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-t-bar',
  templateUrl: './user-t-bar.component.html',
  styleUrls: ['./user-t-bar.component.scss']
})
export class UserTBarComponent implements OnInit {
  options: any
  cData: any
  uData:any
  constructor(private router: Router, private as: AuthService,
    private toaster:ToastrService,
  private userAPI:UserService) {

  }

  ngOnInit(): void {
 
  }
  logout() {
    localStorage.removeItem('token')
    localStorage.clear();
    this.router.navigateByUrl("/login")
  }
}
