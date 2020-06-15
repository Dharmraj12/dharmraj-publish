import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../model/user-model';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
@Component({
  selector: 'mnl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  title = '';

  @Input()
  logoImageUrl = './assets/images/logo.png';

  @Input()
  backgroundImageUrl = './assets/images/background.jpg';

  @Input()
  disabled = false;

  @Output()
  login  = new EventEmitter<UserModel>();

  constructor(private sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    if (this.formGroup.valid) {
      this.login .emit(this.formGroup.value);
    }
  }
  getBackgroundImageUrl(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.backgroundImageUrl})`);
}

}
