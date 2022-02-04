import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments'
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  id: any
  data: any
  constructor(private userAPI: UserService, private router:Router,
    private toastr:ToastrService, private ar: ActivatedRoute) {
    this.ar.params.subscribe(a => {
      this.id = a.id
    })
    setTimeout(() => {
      render({
        id: '#papypal',
        currency: 'INR',
        value: '100.00',
        onApprove: (details) => {
          console.log(details);

          this.data.membership = 1
          this.userAPI.editMember(this.data, this.id).subscribe(res => {
            console.log(res);
            if (res.status == 200) {
              this.toastr.success('Membership Updated  !')
              this.router.navigateByUrl('/user/list')

          }
          })
        }
      })
    }, 1000);

  }

  ngOnInit(): void {
    this.userAPI.getSingleMember(this.id).subscribe(res => {
      this.data = res.body



    })
  }

}
