---
Title: Menu component
Status: Active
Last reviewed: 2020-06-08
---

# [Menu Component](/projects/commons/src/lib/components/menu/menu.component.ts "Defined in menu.component.ts")

Side menu with icon and name 

![Menu Component](/docs/docassets/images/menu.png)

## Basic usage

```html
<mnl-menu ></mnl-menu>
```
## Class members

### Properties

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| menuData | `Array` |  | Array of menu with sub menu |


### Events

| Name | Type | Description |
| ---- | ---- | ----------- |
| menuSideNavClickEvent | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`event`](/projects/commons/src/lib/components/menu/menu.component.ts)`>` | Emitted when the side menu or sub menu clicked   with current clicked Menu Detail .  |

## Details

### Handling events

**app.component.html**

```html
<mnl-menu [menuData]= "menuData" (menuSideNavClickEvent) ="changeRouteLink($event)"></mnl-menu>
```

**app.component.ts**

```ts
export class AppComponent {
routeUrl = any ;
menuData = [{ name: 'DashBoard', isExpanded: false, icon: 'home', showExpendIcon: true, 
        subMenu:[{ name: 'sub menu', icon: 'home' }] },{ name: 'Home2', icon: 'home' }];
        
 changeRouteLink(event) {
    this.routeUrl = event.name;
  }
}
```