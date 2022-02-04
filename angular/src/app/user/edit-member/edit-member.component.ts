import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  createUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    address: new FormControl(''),
    membership: new FormControl(''),
  })
  id: any
  memberData:any
  constructor(private userAPI: UserService, private ar: ActivatedRoute,
    private router :Router,
    private toastr: ToastrService, private datepipe: DatePipe,
    private as: AuthService) {
    this.ar.params.subscribe(a => {
      this.id = a.id
    })
  }

  ngOnInit(): void {
    this.userAPI.getSingleMember(this.id).subscribe(res => {
      console.log(res);
      this.memberData=res.body
      this.createUserForm.patchValue({
        name:this.memberData.name,
        dob:this.datepipe.transform(this.memberData.dob,'yyyy-MM-dd'),
        address:this.memberData.address,

        mobile:this.memberData.mobile,
        membership:this.memberData.membership,
      })

    })
  }



  onSubmit() {
    console.log(this.createUserForm.value);

    if (this.createUserForm.invalid) {
      this.toastr.error("Enter Valid Details !")
      return
    }
    console.log(this.createUserForm.value);

    this.userAPI.editMember(this.createUserForm.value,this.id).subscribe(res => {
      console.log(res);
      if (res.status == 200) {
        this.createUserForm.reset()

        this.ngOnInit()
        this.toastr.success('Member Updated   !')
        this.router.navigateByUrl('/user/list')

      } else {
        this.toastr.error("Member Not Updated !")

      }
    },
      err => {
        if (err.status == 409) {
          this.toastr.error("Member Not Updated !")
          console.log(err);

        } else {
          this.toastr.error("Member Not Updated !")

        }
      })
  }
  reset() {
    this.createUserForm.reset()
    this.router.navigateByUrl('/user/list')
  }
}
