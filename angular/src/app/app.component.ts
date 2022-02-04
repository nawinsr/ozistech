import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showspinner = false
  constructor(public authservice: AuthService,
    public router: Router,
    private translate: TranslateService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showspinner = true
      }
      if (event instanceof NavigationEnd) {
        this.showspinner = false
      }
    })
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en/) ? browserLang : 'en');
  }


}
