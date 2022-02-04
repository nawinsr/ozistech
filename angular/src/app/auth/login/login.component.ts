import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { constants } from '../../core/constants'
import { faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faFileAlt = faFileAlt;
  search = faSearch;
  isAdmin = false;
  isClient = false
  isUser = false
  r = 0
  alreadyLoggedIn!: boolean;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })

  constructor(public authService: AuthService,
    private router: Router, private activatedroute: ActivatedRoute,
    private messageService: ToastrService,
    public translate: TranslateService) {
    this.activatedroute.queryParams.subscribe(a => {
      this.r = a.r
    })
  }

  ngOnInit(): void {
    if (this.r == 1) {
      this.router.navigateByUrl("/login")
      setTimeout(() => {
        window.location.reload()
      }, 100);
    }
    this.alreadyLoggedIn = this.authService.isLoggedIn()
    this.isAdmin = this.authService.isAdmin()
 
    if (this.alreadyLoggedIn && this.isAdmin)
      this.router.navigateByUrl('/user/')
 
  

  }

  async submit() {
    console.log(this.loginForm.value);
    const result = await this.authService.loginUser(this.loginForm.value).catch(async (error) => {
      console.log("error", error[0]);
    

    });

    if (result) {
      console.log(result);

      if (result == true && this.authService.isAdmin() == true) {
        this.messageService.success('Success');
        this.router.navigateByUrl('/user/create')
        return
      }
   

     
  
      this.messageService.error(constants.something_wrong);
      return
    }

  }

}
