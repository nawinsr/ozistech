import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiEndPoint } from '../config/apiEndPoint';
import { HttpService } from './http/http.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: boolean = false;
  public admin: boolean = false;
  public client: boolean = false;
  public user: boolean = false;
  public authToken!: string;
  public ClientId: any
  public userId: any
  public userStatus = false
  public clientStatus = false
  verified = false;
  constructor(private http: HttpService,
    private toaster: ToastrService) {

  }

  async loginUser(loginValues: any): Promise<boolean> {
    this.loggedIn = false;
    this.admin = false
    let result: any = await this.http.post_wh(ApiEndPoint.login, loginValues).toPromise().catch(err => {
      console.log(err);
      if (err.status == 401) {
        this.toaster.error("Invalid Username or Password !")
        return
      }

    })
    console.log("nawin", result);
    this.authToken = result.token;
    localStorage.setItem('token', this.authToken);
    this.parseToken(this.authToken);
    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token')
    if (!token)
      return false;
    this.authToken = token;
    this.parseToken(this.authToken);
    return this.loggedIn;
  }
  isAdmin() {
    const token = localStorage.getItem('token')
    if (!token)
      return false;
    this.authToken = token;
    this.parseToken(this.authToken);
    return this.admin;
  }


  parseToken(token: string) {
    const tokens = token.split(".");
    const userData: any = JSON.parse(atob(tokens[1]));
    this.verified = userData.verified
    if (userData.type === 'admin') {
      this.loggedIn = true;
      this.admin = true
    }
   }


 

 

 


}

