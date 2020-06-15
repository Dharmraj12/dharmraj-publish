import { Component, OnInit } from '@angular/core';
import { LogService, UserModel } from '@muraai/mnl-commons';

@Component({
  selector: 'app-login',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.scss']
})
export class LoginDemoComponent  {
   constructor(private logService: LogService) { }

   onLogin(event: UserModel) {
      this.logService.info(event);
   }

}
