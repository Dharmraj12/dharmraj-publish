---
Title: Profile Component
Status: Active
Last reviewed: 2020-06-11
---

# [Profile Component](/projects/commons/src/lib/components/profile/profile.component.ts "Defined in profile.component.ts")

Displays user's First and Last name along with user initials.

![Profile Component](/docs/docassets/images/profile.png)

## Basic usage
```html
<mnl-user-profile></mnl-user-profile>
```
- How to attach Profile component in Header component.
```html
    <div fxLayoutAlign="end center" fxFlex>
      <ng-content select=`[mnl-header-user-profile]`></ng-content>
    </div>
```
***Note:***
If we inject Profile component inside Header component we need to specify the selector provided for ng-content(i.e `mnl-header-user-profile`)
Ex:   
```html 
<mnl-user-profile mnl-header-user-profile [firstName]="userFirstName" [lastName]="userLastName"(userInitials)="onInitialsClick($event)"></mnl-user-profile>
```
---

## Class members

### Properties

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| firstName | `string` |  | Takes as Input by the user. |
| lastName | `string` |  | Takes as Input by the user. |


### Events

| Name | Type | Description |
| ---- | ---- | ----------- |
| profileClick | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`event`](/projects/commons/src/lib/components/profile/profile.component.ts)`>` | Emitted when the User Initials button icon is clicked.  |

## Details

### Handling events

**app.component.html**

```html
<mnl-user-profile [firstName]="userFirstName" [lastName]="userLastName" (profileClick)="onProfileClick($event)"></mnl-user-profile>
```

**app.component.ts**

```ts
export class AppComponent {

  ngOnInit() {
    this.userFirstName = 'John';
    this.userLastName = 'Smith';
  }

  onProfileClick(event: any) {
    this.profileClick = event;
  }
}
```