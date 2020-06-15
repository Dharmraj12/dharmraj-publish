---
Title: Locale Service
Status: Active
Last reviewed: 2020-06-10
---

# [Locale Service](/projects/commons/src/lib/services/locale.service.ts "Defined in locale.service.ts")

Translates the values as per the selected language. Supports localization.

## Basic usage of translate pipe

```html
 <span>
 {{ 'DEMO.MENU.LANGUAGES' | translate }}
 </span>
```

## Class members

### Methods

 **getLanguages**(): Array<LanguageItem>
    Fetches the list of available languages from  [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file if present, else loads the default languages specified.
     -   **Returns** [`Array<LanguageItem>`](/projects/commons/src/lib/services/locale.service.ts) - Languages available for the Translation.

 **getDefaultLocale**(): LanguageItem
    Gets the default locale if it is specified through [`User Profile Service`](/projects/commons/src/lib/services/user-profile.service.ts) in the app else gets the `locale` from the [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file if present else, fetches the browser's current locale or else `'en'` is returned .
     -   **Returns** [`LanguageItem`](/projects/commons/src/lib/services/locale.service.ts) - Default locale for the Translation.
     
 **getActiveLocale**(): LanguageItem
    Gets the active locale from the [`User Profile Service`](/projects/commons/src/lib/services/user-profile.service.ts)
     -   **Returns** [`Array<LanguageItem>`](/projects/commons/src/lib/services/locale.service.ts)  - Active locale for the Translation.
     
 **setActiveLocale**(locale: `LanguageItem`)
    Sets the active locale based on the key and localization based on the direction.
    Sets the active locale through the [`User Profile Service`](/projects/commons/src/lib/services/user-profile.service.ts)
      -   _key:_ [`Array<LanguageItem>`](/projects/commons/src/lib/services/locale.service.ts)  - Sets the active language for translations.

 **setTextOrientation**(direction)
    Sets text orientation based on the direction. 
    -direction: `string: ltr || rtl`
    
 **getTextOrientation**(): string
    gets active direction. 
      -   **Returns**: `string: ltr || rtl` - Active Direction.
      
## Details
1. The languages array defined in the  **getLanguages**() method can be included for translation by specifying the `languages` array in [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file.
For example:
```html
 "languages": [
        {
          "key": "fr",
          "label": "French",
          "direction": "ltr"
      },
        {
          "key": "de",
          "label": "German",
          "direction": "ltr"
      },
        {
          "key": "en",
          "label": "English",
          "direction": "ltr"
      },
        {
        "key": "ar",
        "label": "Arabic",
        "direction": "rtl"
    }
      ]
```
- If no languages setting is provided in [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file , the component shows the above languages.

- For languages that need RTL or LTR orientation, direction property must be declared. 
         LTR - Left to right text orientation
         RTL - Right to left text orientation
For example:
```html
    {
          "key": "en",
          "label": "English",
          "direction": "ltr"
      },
       {
        "key": "ar",
        "label": "Arabic",
        "direction": "rtl"
    } 
```
2. The Default locale specified in the  **getDefaultLocale**() method can be included in the [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file as below.

For example:
```html
 "locale": "en",
 ```
 If no locale setting is provided in [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file, the component shows the English language.
 
 
 ### Registering translation sources

To supply your own set of translation source files, you first need to create a subfolder for them within your application's `assets` folder. The folder called `i18n` where the translation lists will be stored. So, the general format of the path to this folder will be:

`<app>/src/assets/i18n`

If you wanted English and French translations then you would add
`en.json` and `fr.json` files into the `i18n` folder and add your new keys:

    // en.json

        ...
      "LANGUAGES": "Languages"
        ...

    // fr.json
        ...
       "LANGUAGES": "Langues"
        ...
You can register as many entries as you like. The files follow the same hierarchical key:value JSON format as the built-in translations. You can add new keys to your local files or redefine existing keys but the built-in definitions
will be used for any keys you don't explicitly define in your files. For example, `en.json` might look like the following:

```json
{
    "DEMO": {
        "MENU": {
            "LANGUAGES": "Languages"
        },
        "HEADER":{
            "TITLE": "DEMO APP"
        }
    }
}
```

To enable the new translations in your app, you also need to register them in your `app.module.ts` file. Import `TranslateModule, TranslateLoader, TranslateHttpLoader` as below
```ts
// Other imports...

import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
  ...

@NgModule({
  imports: [
    ...
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }})
  ],
  declarations: [
    ...
  ],
  providers: [LocaleService],
  ...
  
 export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
```
You can now use your new keys in your component:
```ts
  ...
    constructor(private localeService: LocaleService) {
              }
    ngOnInit() {
        this.languages = this.localeService.getLanguages();
        this.locale = this.localeService.getActiveLocale();
        this.localeService.setActiveLocale(this.locale);
      }
  ...
```
### Switching languages

Depending on your application, you may want to have buttons or dropdown menus to allow language selection for the end users.

You can use [`LanguageMenuComponent`](/docs/components/language-menu.component.md) to switch languages from your code based on input events of your choice:
```ts
class MyComponent {
   constructor(private localeService: LocaleService) {
              }
  onChangeLanguage(language: LanguageItem) {
  this.localeService.setActiveLocale(language);
  }
}
```
 