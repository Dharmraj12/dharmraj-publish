---
Title: Language Menu Component
Status: Active
Last reviewed: 2020-06-10
---

# [Language Menu Component](/projects/commons/src/lib/components/language-menu "Defined in language-menu.component.ts")

Displays all the languages that are present in "app.config.json" and the default (EN).


![Language Menu Screenshot](/docs/docassets/images/language-menu-component.png)


Depending on your application, you may want to have buttons or dropdown menus to allow language selection for the end users.

## Basic usage
How to attach a Language Menu as a main menu
```html
  <button  mat-menu-item [matMenuTriggerFor]="langMenu">
                <mat-icon>language</mat-icon>
                <span>{{ 'DEMO.MENU.LANGUAGES' | translate }}</span>
            </button>
            <mat-menu #langMenu="matMenu">
                <mnl-commons-language-menu></mnl-commons-language-menu>
            </mat-menu>
```

## Details
1. The component fetches the list of available languages from [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file.
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
2. The Default locale can be specified in the [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file as below.

For example:
```html
 "locale": "en",
 ```
 If no locale setting is provided in [`app.config.json`](/projects/demo-app/src/assets/app.config.json/) file, the component fetches the current browser language else shows the English language.
 

## See Also

-   [Locale Service](/docs/services/locale-service.md/) - Translates the values as per the selected language. Supports localization.
