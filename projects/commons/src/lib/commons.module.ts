import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './components/menu/menu.component';
import { AppConfigService } from './services/app.config.service';
import { AppConfigPipe } from './pipes/app-config-pipe';
import { LogService } from './services/log.service';
import { LocalStorageService } from './services/local-storage.service';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UserProfileService } from './services/user-profile.service';
import { LocaleService } from './services/locale.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FirstLetterPipe } from './pipes/first-letter-pipe';

import { MaterialModule } from './material.module';
@NgModule({
  declarations: [HeaderComponent, MenuComponent, AppConfigPipe, LoginComponent, LanguageMenuComponent, ProfileComponent, FirstLetterPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MaterialModule,
    TranslateModule
  ],
  providers: [
    TranslateService,
    { provide: APP_INITIALIZER, useFactory: loadConfig,
      deps: [AppConfigService, UserProfileService, LocalStorageService, LogService, LocaleService], multi: true },
  ],
  exports: [HeaderComponent, MenuComponent, AppConfigPipe, LanguageMenuComponent, LoginComponent, ProfileComponent, FirstLetterPipe]
})
export class CommonsModule { }

export function loadConfig(config: AppConfigService) {
  const conf = () => config.load();
  return conf;
}
