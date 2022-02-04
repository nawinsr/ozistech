import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  clientId: any
  userList: any
  lDD:any
  createUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    address: new FormControl(''),
   })
  constructor(private userAPI: UserService,
    private toastr: ToastrService,private datepipe:DatePipe,
    private as: AuthService) {
  }

  ngOnInit(): void {
    let date=new Date(Date.now())
    this.createUserForm.patchValue({
      dob: this.datepipe.transform(date,"yyyy-MM-dd")
    })

  }

  

  onSubmit() {
    console.log(this.createUserForm.value);

    if (this.createUserForm.invalid) {
      this.toastr.error("Enter Valid Details !")
      return
    }
    console.log(this.createUserForm.value);
    
    this.userAPI.createMember(this.createUserForm.value).subscribe(res => {
      console.log(res);
      if (res.status == 201) {
        this.createUserForm.reset()
    
        this.ngOnInit()
        this.toastr.success('Member Created   !')
      } else {
        this.toastr.error("Member Not Created !")

      }
    },
      err => {
        if (err.status==409) {
          this.toastr.error("Member Not Created !")
          console.log(err);

        }else{
          this.toastr.error("Member Not Created !")

        }
      })
  }
  reset(){
    this.createUserForm.reset()
    this.ngOnInit()
  }
}
