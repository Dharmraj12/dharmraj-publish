import { Injectable } from '@angular/core';
import {AppConfigService} from './app.config.service';
import {LocalStorageService} from './local-storage.service';
@Injectable({
    providedIn: 'root'
  })
export class UserProfileService {
    static LOCALE_PREFIX = '____locale';
    userPrefix = '';
    constructor(private appConfigService: AppConfigService, private localStorageService: LocalStorageService) {}
    getApplicationId(): string {
        return this.appConfigService.get('applicationId') ? this.appConfigService.get('applicationId') : '';
    }
    setUserPrefix(userPrefix) {
        this.userPrefix = userPrefix;
    }
    getUserPrefix(): string {
        return  this.userPrefix  ? this.userPrefix : '';
    }
    setLocale(locale) {
        this.localStorageService.set( this.getApplicationId() + this.userPrefix + UserProfileService.LOCALE_PREFIX  ,   locale);
    }
    getLocale(): string {
        return this.localStorageService.get(this.getApplicationId() + this.userPrefix + UserProfileService.LOCALE_PREFIX);
    }
}
