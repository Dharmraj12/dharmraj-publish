---
Title: UserProfileService
Status: Active
Last reviewed: 2020-06-08
---

# [UserProfileSerivce](/projects/commons/src/lib/services/user-profile.service.ts "Defined in user-profile.service.ts")

Supports setLocale(), getLocale(),setUserPrefix(),getUserPrefix() and getApplicationId().

## Class members
 static LOCALE_PREFIX = '____locale';
 userPrefix = '';
### Methods

-   **getApplicationId**( )
      fetch application id from app.config.json if not defined in app.config.json then it will return ''

-   **setUserPrefix**(userPrefix: `string` )
        this.userPrefix = userPrefix

    **setLocale**(locale )
      it will store in localstorage using localStorageService.
      key is combination of applicationId + userPrefix + LOCALE_PREFIX
      
-   **getLocale**( )
       it will return current locale from localstorage using key 
       key is combination of applicationId + userPrefix + LOCALE_PREFIX

## Details

The [`UserProfileService`](/projects/commons/src/lib/services/user-profile.service.ts) service provides support for getLocale , setLocale , getApplicationId, setuserPrefix and getUserPrefix


Below is a simple example of using the [`UserProfileService`](/projects/commons/src/lib/services/user-profile.service.ts) in practice. 

**app.component.ts**

```ts
import { UserProfileService } from '@muraai/mnl-commons';
@Component({...})
export class AppComponent  implements onInit{
  userPrefix = '';
  locale = '';
  applicationId = '';
    constructor(private userProfileService: UserProfileService) {}
     ngOnInit() {
        this.userProfileService.setUserPrefix('demo');
        this.userProfileService.setLocale('un');
        this.userPrefix = this.userProfileService.getUserPrefix();
        this.locale = this.userProfileService.getLocale();
        this.applicationId = this.userProfileService.getApplicationId();
     }

}
```