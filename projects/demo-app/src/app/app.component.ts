import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppConfigService, LogService, UserProfileService } from '@muraai/mnl-commons';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  over = 'over';
  routeUrl: string;
  host: string;
  userPrefix: string;
  locale: string;
  header = {
    name: 'Demo-App', showMenuIcon: true,
    toolbarColor: 'primary', logo: 'http://muraai.com/wp-content/uploads/2019/12/new.png'
  };
  menuData = [{ name: 'home',  icon: 'home', route: '/home' },
              { name: 'Login', icon: 'login', route: '/login' }];
  @ViewChild('sidenav') sidenav: MatSidenav;
  userFirstName: string;
  userLastName: string;
  initials: any;

  constructor(private config: AppConfigService, private logService: LogService,
              private userProfileService: UserProfileService, private translate: TranslateService,
              private router: Router) {
              }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.userProfileService.setUserPrefix('demo');
    this.logService.info('this is info ');
    this.userFirstName = 'John';
    this.userLastName = 'Smith';
  }

  changeRouteLink(event) {
    this.router.navigate([event.route]);
  }

  // to get the key value from app.config.json using AppConfig service
  getConfigValue() {
    this.host = this.config.get('host');
  }

  onProfileClick(event: any) {
    this.initials = event;
  }

}
