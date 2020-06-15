import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageMenuComponent } from './language-menu.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfigService } from '../../services/app.config.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserProfileService } from '../../services/user-profile.service';
import { LocaleService } from '../../services/locale.service';

describe('LanguageMenuComponent', () => {
  let component: LanguageMenuComponent;
  let fixture: ComponentFixture<LanguageMenuComponent>;

  beforeEach(async(() => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
      ],
      declarations: [ LanguageMenuComponent ],
      providers: [
       { provide: AppConfigService, useValue: jasmine.createSpyObj('AppConfigService', ['get']) },
       LocalStorageService, UserProfileService, LocaleService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data from service function', async(() => {
    let mockAppConfigService: jasmine.SpyObj<AppConfigService>;
    mockAppConfigService = jasmine.createSpyObj('AppConfigService', ['get']);
// tslint:disable-next-line: deprecation
    mockAppConfigService = TestBed.get(AppConfigService);
    mockAppConfigService.get.and.returnValue([]);
    fixture.detectChanges();
  }));
});
