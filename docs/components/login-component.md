---
Title: Login component
Status: Active
Last reviewed: 2020-06-08
---

# [Login Component](/projects/commons/src/lib/components/login/login.component.ts "Defined in login.component.ts")

 Authenticates Application based on UserName and Password.

![Login Component](/docs/docassets/images/login.png)

## Basic usage

```html
<mnl-login ></mnl-login>
```
## Class members

### Properties

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| title | `String` |  |  Title for LoginPage |
| logoImageUrl | `String` |  |  Logo  for login Page  |
| backgroundImageUrl | `String` |  |  set background for Login Compo |
| disabled | `Boolean` |  false| prevent the double submission |


### Events

| Name | Type | Description |
| ---- | ---- | ----------- |
| login | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`UserModel`](/projects/commons/src/lib/model/user-model.ts)`>` | Emitted when Login button clicked.  |

## Details

### Handling events

**app.component.html**

```html
 <mnl-login (login) ="loginDetail($event)" [title]="title"></mnl-login>
```

**app.component.ts**

```ts
export class AppComponent {
 title =" Demo-App"
 loginDetail(event) {
 }
}
```