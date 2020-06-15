---
Title: App Config service
Status: Active
---

# [App Config service](/projects/commons/src/lib/services/app.config.service.ts "Defined in app.config.service.ts")

Supports app configuration settings, stored server side.

## Class members

### Methods

-   **get**(key: `string` )
    Gets the value of a named property.
    -   _key:_ `string`  - Name of the property

## Details

The [`AppConfigService`](/projects/commons/src/lib/services/app.config.service.ts) service provides support for loading and accessing global application configuration settings that you store on the server side in the form of a JSON file.

You may also use the service if there is a need to change global settings for all the clients.
The service is already pre-configured to look for the "app.config.json" file present in the assets folder of the application.

Example of the default settings file content:

**app.config.json**

```json
{
    "host": "localhost",
    "env": "development",
    "application": "Demo Library Application",
    "logLevel": "warn",
    "applicationId": "demoApp"
}
```
Below is a simple example of using the [`AppConfigService`](/projects/commons/src/lib/services/app.config.service.ts) in practice. 

**app.component.ts**

```ts
import { AppConfigService } from '@muraai/mnl-commons';

@Component({...})
export class AppComponent {
    host: string;
    constructor(private config: AppConfigService) {}
    
    // to get the key value from app.config.json using AppConfigService
     getConfigValue() {
        this.host = this.config.get('host');
     }
}
```