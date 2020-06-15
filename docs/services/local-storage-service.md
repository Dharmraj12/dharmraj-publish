---
Title: LocalStorageService
Status: Active
Last reviewed: 2020-06-08
---

# [Local storage service](/projects/commons/src/lib/services/local-storage.service.ts "Defined in local-storage.service.ts")

Supports set and get value in localstorage.

## Class members

### Methods

-   **get**(key: `string` )
    Gets the value of a named property.
    -   _key:_ `string`  - Name of the property

-   **set**(key: `string`, value: `any` )
    set the (key, value )of a named property.
    -   _key:_ `string`  - Name of the property


## Details

The [`LocalStorageService`](/projects/commons/src/lib/services/local-storage.service.ts) service provides support for store (key, value) pair in localstorage and get value based on key.


Below is a simple example of using the [`LocalStorageService`](/projects/commons/src/lib/services/local-storage.service.ts) in practice. 

**app.component.ts**

```ts
import { LocalStorageService } from '@muraai/mnl-commons';
@Component({...})
export class AppComponent {
    constructor(private localStorageService: LocalStorageService) {}
    
    
     set() {
        this.localStorageService.set('key', 'value')
     }
     get() {
          this.localStorageService.get('key')
     }
}
```