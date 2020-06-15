import { Component, OnInit } from '@angular/core';
import { LocaleService, LanguageItem } from '../../services/locale.service';

@Component({
  selector: 'mnl-commons-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {
  languages: Array<LanguageItem> = [];
  locale: LanguageItem;
  constructor(private localeService: LocaleService) { }

  ngOnInit() {
    this.languages = this.localeService.getLanguages();
    this.locale = this.localeService.getDefaultLocale();
    this.localeService.setActiveLocale(this.locale);
}

  onChangeLanguage(language: LanguageItem) {
  this.localeService.setActiveLocale(language);
  }
}
