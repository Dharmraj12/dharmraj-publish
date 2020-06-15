---
Title: Header component
Status: Active
Last reviewed: 2020-06-08
---

# [Header Component](/projects/commons/src/lib/components/header/header.component.ts "Defined in header.component.ts")

 Toolbar with logo, application name and menu icon

![Header Component](/docs/docassets/images/header.png)

## Basic usage

```html
<mnl-header ></mnl-header>
```
## Class members

### Properties

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| header | `Object` |  | we can pass logo, application name and showMenuIcon  in object |


### Events

| Name | Type | Description |
| ---- | ---- | ----------- |
| menuButonClickEvent | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`event`](/projects/commons/src/lib/components/header/header.component.ts)`>` | Emitted when the Menu Icon Click  to show and hide  left side menu.  |

## Details

### Handling events

**app.component.html**

```html
<mnl-header (menuButonClickEvent) ="sidenav.toggle()"[header]="header">
</mnl-header>
```

**app.component.ts**

```ts
export class AppComponent {
 header = {name: 'Demo-App', showMenuIcon: true,
           toolbarColor: 'primary', logo:'./assets/images/muraai-logo.png'
  };
}
```