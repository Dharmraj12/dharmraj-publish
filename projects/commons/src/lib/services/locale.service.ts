import { Injectable, Inject } from '@angular/core';
import { AppConfigService } from './app.config.service';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileService } from './user-profile.service';
import { DOCUMENT } from '@angular/common';
import { Direction } from '@angular/cdk/bidi';

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  locale: string;
  languages: Array<LanguageItem> = [];
  constructor(private config: AppConfigService,
              private translate: TranslateService,
              private userProfileService: UserProfileService,
              @Inject(DOCUMENT) private document: Document) {
              }

  setTextOrientation(direction) {
    document.body.setAttribute('dir', direction);
}

  getTextOrientation(): string {
  return document.body.getAttribute('dir');
}

  getLanguages(): Array<LanguageItem> {
    this.languages = this.config.get('languages');
    if (!this.languages) {
      this.languages = [
      {
        key: 'fr',
        label: 'French',
        direction: 'ltr'
    },
      {
        key: 'de',
        label: 'German',
        direction: 'ltr'
    },
      {
        key: 'en',
        label: 'English',
        direction: 'ltr'
    },
      {
      key: 'ar',
      label: 'Arabic',
      direction: 'rtl'
  }
    ];
  }
    return this.languages;
}
  getDefaultLocale(): LanguageItem {
  this.locale = this.userProfileService.getLocale();
  if (!this.locale) {
    // tslint:disable-next-line: max-line-length
    this.locale = this.config.get('locale') ? this.config.get('locale') : this.translate.getBrowserLang() ? this.translate.getBrowserLang() : 'en';
  }
  return this.languages.find((e) => e.key === this.locale);
}

  getActiveLocale(): LanguageItem {
  if (this.userProfileService.getLocale()) {
    return this.languages.find((e) => e.key === this.userProfileService.getLocale());
  }
}

  setActiveLocale(locale: LanguageItem) {
    if (locale) {
    this.translate.use(locale.key);
    this.setTextOrientation(locale.direction);
    this.userProfileService.setLocale(locale.key);
  }
}
}
export interface LanguageItem {
  key: string;
  label: string;
  direction?: Direction;
}
