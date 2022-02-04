import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
userList:any
  constructor(private userAPI:UserService,
    private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.userAPI.getAllMember().subscribe(res=>{
      console.log(res);
      this.userList=res.body
    })
  }
  deleteUser(id:any){
    alert("Are You Sure !")
    this.userAPI.deleteMember(id).subscribe(res=>{
      console.log(res);
      if(res.status==200){
        this.ngOnInit()
        this.toaster.success("Member deleted !")

      }
      
    },err=>{
      if(err)
      this.toaster.error("Member Not deleted !")

    })
  }

  editUser(id:any){
    this.router.navigateByUrl(`/user/edit/${id}`)
  }

  getMembership(id:any){
    this.router.navigateByUrl(`/user/paypal/${id}`)

  }
}
