function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../commons/index.ts":
  /*!***************************!*\
    !*** ../commons/index.ts ***!
    \***************************/

  /*! exports provided: modules, MaterialModule, CommonsModule, loadConfig, MenuComponent, HeaderComponent, AppConfigService, AppConfigPipe, LogService, LogLevelsEnum, logLevels, UserProfileService, LocalStorageService, LanguageMenuComponent, LocaleService, LoginComponent, FirstLetterPipe */

  /***/
  function commonsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/public-api */
    "../commons/src/public-api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "modules", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["modules"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["CommonsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loadConfig", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["loadConfig"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["AppConfigService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppConfigPipe", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["AppConfigPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LogService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogLevelsEnum", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LogLevelsEnum"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "logLevels", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["logLevels"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserProfileService", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["UserProfileService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LanguageMenuComponent", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LanguageMenuComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LocaleService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FirstLetterPipe", function () {
      return _src_public_api__WEBPACK_IMPORTED_MODULE_0__["FirstLetterPipe"];
    });
    /***/

  },

  /***/
  "../commons/src/lib/commons.module.ts":
  /*!********************************************!*\
    !*** ../commons/src/lib/commons.module.ts ***!
    \********************************************/

  /*! exports provided: CommonsModule, loadConfig */

  /***/
  function commonsSrcLibCommonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
      return CommonsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadConfig", function () {
      return loadConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "../commons/src/lib/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "../commons/src/lib/components/menu/menu.component.ts");
    /* harmony import */


    var _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/app.config.service */
    "../commons/src/lib/services/app.config.service.ts");
    /* harmony import */


    var _pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipes/app-config-pipe */
    "../commons/src/lib/pipes/app-config-pipe.ts");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/log.service */
    "../commons/src/lib/services/log.service.ts");
    /* harmony import */


    var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/local-storage.service */
    "../commons/src/lib/services/local-storage.service.ts");
    /* harmony import */


    var _components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/language-menu/language-menu.component */
    "../commons/src/lib/components/language-menu/language-menu.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/user-profile.service */
    "../commons/src/lib/services/user-profile.service.ts");
    /* harmony import */


    var _services_locale_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/locale.service */
    "../commons/src/lib/services/locale.service.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login/login.component */
    "../commons/src/lib/components/login/login.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "../commons/src/lib/components/profile/profile.component.ts");
    /* harmony import */


    var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes/first-letter-pipe */
    "../commons/src/lib/pipes/first-letter-pipe.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./material.module */
    "../commons/src/lib/material.module.ts");

    var CommonsModule = function CommonsModule() {
      _classCallCheck(this, CommonsModule);
    };

    CommonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonsModule
    });
    CommonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommonsModule_Factory(t) {
        return new (t || CommonsModule)();
      },
      providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: loadConfig,
        deps: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"], _services_user_profile_service__WEBPACK_IMPORTED_MODULE_12__["UserProfileService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], _services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"], _services_locale_service__WEBPACK_IMPORTED_MODULE_13__["LocaleService"]],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonsModule, {
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_7__["AppConfigPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__["LanguageMenuComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_16__["FirstLetterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]],
        exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_7__["AppConfigPipe"], _components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__["LanguageMenuComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_16__["FirstLetterPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_7__["AppConfigPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__["LanguageMenuComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_16__["FirstLetterPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]],
          providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: loadConfig,
            deps: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"], _services_user_profile_service__WEBPACK_IMPORTED_MODULE_12__["UserProfileService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], _services_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"], _services_locale_service__WEBPACK_IMPORTED_MODULE_13__["LocaleService"]],
            multi: true
          }],
          exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_7__["AppConfigPipe"], _components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__["LanguageMenuComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_16__["FirstLetterPipe"]]
        }]
      }], null, null);
    })();

    function loadConfig(config) {
      var conf = function conf() {
        return config.load();
      };

      return conf;
    }
    /***/

  },

  /***/
  "../commons/src/lib/components/header/header.component.ts":
  /*!****************************************************************!*\
    !*** ../commons/src/lib/components/header/header.component.ts ***!
    \****************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function commonsSrcLibComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../language-menu/language-menu.component */
    "../commons/src/lib/components/language-menu/language-menu.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function HeaderComponent_mat_toolbar_0_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_button_3_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.menuClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_mat_toolbar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_mat_toolbar_0_button_3_Template, 3, 0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "language");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", null, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mnl-commons-language-menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r0.header.toolbarColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.header.showMenuIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.header.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.header.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, "DEMO.MENU.LANGUAGES"));
      }
    }

    var _c0 = [[["", "mnl-header-user-profile", ""]]];
    var _c1 = ["`[mnl-header-user-profile]`"];

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.menuButonClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "menuClick",
        value: function menuClick(event) {
          this.menuButonClickEvent.emit(event);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["mnl-header"]],
      inputs: {
        header: "header"
      },
      outputs: {
        menuButonClickEvent: "menuButonClickEvent"
      },
      ngContentSelectors: _c1,
      decls: 1,
      vars: 1,
      consts: [[3, "color", 4, "ngIf"], [3, "color"], ["fxFlex", "85"], ["mat-icon-button", "", 4, "ngIf"], [1, "mnl-logo", 3, "src"], ["fxFlex", "15", "fxLayoutAlign", "end"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["langMenu", "matMenu"], ["fxLayoutAlign", "end center", "fxFlex", ""], ["mat-icon-button", ""], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_mat_toolbar_0_Template, 19, 8, "mat-toolbar", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_6__["LanguageMenuComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: [".mnl-logo {\n  margin-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9GOlxcTXVyYWFpLWxpYnJhcnlcXGRoYXJtcmFqLXB1Ymxpc2gvcHJvamVjdHNcXGNvbW1vbnNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUNDcEIiLCJmaWxlIjoicHJvamVjdHMvY29tbW9ucy9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tbmwtbG9nb3tcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn0iLCIubW5sLWxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnl-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menuButonClickEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../commons/src/lib/components/language-menu/language-menu.component.ts":
  /*!******************************************************************************!*\
    !*** ../commons/src/lib/components/language-menu/language-menu.component.ts ***!
    \******************************************************************************/

  /*! exports provided: LanguageMenuComponent */

  /***/
  function commonsSrcLibComponentsLanguageMenuLanguageMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageMenuComponent", function () {
      return LanguageMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_locale_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/locale.service */
    "../commons/src/lib/services/locale.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    function LanguageMenuComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageMenuComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var language_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onChangeLanguage(language_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", language_r1.label, " ");
      }
    }

    var LanguageMenuComponent = /*#__PURE__*/function () {
      function LanguageMenuComponent(localeService) {
        _classCallCheck(this, LanguageMenuComponent);

        this.localeService = localeService;
        this.languages = [];
      }

      _createClass(LanguageMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.languages = this.localeService.getLanguages();
          this.locale = this.localeService.getDefaultLocale();
          this.localeService.setActiveLocale(this.locale);
        }
      }, {
        key: "onChangeLanguage",
        value: function onChangeLanguage(language) {
          this.localeService.setActiveLocale(language);
        }
      }]);

      return LanguageMenuComponent;
    }();

    LanguageMenuComponent.ɵfac = function LanguageMenuComponent_Factory(t) {
      return new (t || LanguageMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_locale_service__WEBPACK_IMPORTED_MODULE_1__["LocaleService"]));
    };

    LanguageMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LanguageMenuComponent,
      selectors: [["mnl-commons-language-menu"]],
      decls: 1,
      vars: 1,
      consts: [["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]],
      template: function LanguageMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LanguageMenuComponent_button_0_Template, 2, 1, "button", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9jb21tb25zL3NyYy9saWIvY29tcG9uZW50cy9sYW5ndWFnZS1tZW51L2xhbmd1YWdlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnl-commons-language-menu',
          templateUrl: './language-menu.component.html',
          styleUrls: ['./language-menu.component.scss']
        }]
      }], function () {
        return [{
          type: _services_locale_service__WEBPACK_IMPORTED_MODULE_1__["LocaleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/components/login/login.component.ts":
  /*!**************************************************************!*\
    !*** ../commons/src/lib/components/login/login.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function commonsSrcLibComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function LoginComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.logoImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LoginComponent_h3_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.title));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(sanitizer) {
        _classCallCheck(this, LoginComponent);

        this.sanitizer = sanitizer;
        this.title = '';
        this.logoImageUrl = './assets/images/logo.png';
        this.backgroundImageUrl = './assets/images/background.jpg';
        this.disabled = false;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.formGroup.valid) {
            this.login.emit(this.formGroup.value);
          }
        }
      }, {
        key: "getBackgroundImageUrl",
        value: function getBackgroundImageUrl() {
          return this.sanitizer.bypassSecurityTrustStyle("url(".concat(this.backgroundImageUrl, ")"));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["mnl-login"]],
      inputs: {
        title: "title",
        logoImageUrl: "logoImageUrl",
        backgroundImageUrl: "backgroundImageUrl",
        disabled: "disabled"
      },
      outputs: {
        login: "login"
      },
      decls: 17,
      vars: 15,
      consts: [["fxLayoutAlign", "center center", "fxFlexFill", "", 1, "mnl-login-container"], [1, "mnl-login-card"], ["fxLayoutAlign", "stretch", "fxLayout", "column", 3, "formGroup", "ngSubmit"], ["fxLayoutAlign", "center center"], [3, "src", 4, "ngIf"], ["fxLayoutAlign", "center center", 4, "ngIf"], ["fxFlex", "100"], ["matInput", "", "formControlName", "username", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], [3, "src"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_img_5_Template, 1, 1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_h3_6_Template, 3, 3, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.getBackgroundImageUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logoImageUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "MNL.LOGIN.USERNAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "MNL.LOGIN.PASSWORD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || !ctx.formGroup.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "MNL.LOGIN.LOGIN_BUTTON"), "");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: [".mnl-login-card[_ngcontent-%COMP%] {\n  width: 450px;\n  min-width: 320px;\n  padding: 21px 64px 34px;\n  box-sizing: border-box;\n}\n\n.mnl-login-container[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL0Y6XFxNdXJhYWktbGlicmFyeVxcZGhhcm1yYWotcHVibGlzaC9wcm9qZWN0c1xcY29tbW9uc1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FDQzFCOztBREVBO0VBQ0ksc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQ0M1QiIsImZpbGUiOiJwcm9qZWN0cy9jb21tb25zL3NyYy9saWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tbmwtbG9naW4tY2FyZHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDY0cHggMzRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tbmwtbG9naW4tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxufSIsIi5tbmwtbG9naW4tY2FyZCB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMjFweCA2NHB4IDM0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tbmwtbG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnl-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        logoImageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundImageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        login: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../commons/src/lib/components/menu/menu.component.ts":
  /*!************************************************************!*\
    !*** ../commons/src/lib/components/menu/menu.component.ts ***!
    \************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function commonsSrcLibComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var _c0 = function _c0(a0) {
      return {
        "mnl-rotated": a0
      };
    };

    function MenuComponent_mat_nav_list_0_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_nav_list_0_mat_icon_6_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return menu_r1.isExpanded = !menu_r1.isExpanded;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, menu_r1.isExpanded));
      }
    }

    function MenuComponent_mat_nav_list_0_a_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_nav_list_0_a_7_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var sub_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10.onSidenavClose(sub_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r9.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r9.name);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "mnl-expanded": a0
      };
    };

    function MenuComponent_mat_nav_list_0_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_mat_nav_list_0_a_7_div_1_Template, 6, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, menu_r1.isExpanded));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r1.subMenu);
      }
    }

    function MenuComponent_mat_nav_list_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_nav_list_0_Template_mat_icon_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var menu_r1 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onSidenavClose(menu_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_mat_nav_list_0_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var menu_r1 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSidenavClose(menu_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_mat_nav_list_0_mat_icon_6_Template, 2, 3, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_mat_nav_list_0_a_7_Template, 2, 4, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.showExpendIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.isExpanded);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);

        this.menuSideNavClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenuComponent, [{
        key: "onSidenavClose",
        value: function onSidenavClose(menu) {
          this.menuSideNavClickEvent.emit(menu);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["mnl-menu"]],
      inputs: {
        menuData: "menuData"
      },
      outputs: {
        menuSideNavClickEvent: "menuSideNavClickEvent"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["mat-list-item", "", "fxLayout", "row"], [3, "click"], [1, "mnl-menu", 3, "click"], ["class", "mnl-menu-button", 3, "ngClass", "click", 4, "ngIf"], ["mat-list-item", "", "fxLayout", "row", "class", "mnl-submenu", 3, "ngClass", 4, "ngIf"], [1, "mnl-menu-button", 3, "ngClass", "click"], ["mat-list-item", "", "fxLayout", "row", 1, "mnl-submenu", 3, "ngClass"], ["fxLayout", "row", 3, "click"], [1, "mnl-menu"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_mat_nav_list_0_Template, 8, 4, "mat-nav-list", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]],
      styles: [".mnl-submenu[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n  padding-left: 15px !important;\n}\n\n.mnl-menu-button[_ngcontent-%COMP%] {\n  transition: 300ms ease-in-out;\n  transform: rotate(0deg);\n}\n\n.mnl-menu-button.mnl-rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.mnl-submenu.mnl-expanded[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n\n.mnl-menu[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL21lbnUvRjpcXE11cmFhaS1saWJyYXJ5XFxkaGFybXJhai1wdWJsaXNoL3Byb2plY3RzXFxjb21tb25zXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUNDakM7O0FEQ0U7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FDRTNCOztBREFFO0VBQ0UseUJBQXlCO0FDRzdCOztBRERFO0VBQ0Usb0JBQW9CO0FDSXhCOztBRERFO0VBQ0UsZUFBZTtBQ0luQiIsImZpbGUiOiJwcm9qZWN0cy9jb21tb25zL3NyYy9saWIvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW5sLXN1Ym1lbnUge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubW5sLW1lbnUtYnV0dG9uIHtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIC5tbmwtbWVudS1idXR0b24ubW5sLXJvdGF0ZWQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgLm1ubC1zdWJtZW51Lm1ubC1leHBhbmRlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICB9XHJcblxyXG4gIC5tbmwtbWVudXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9IiwiLm1ubC1zdWJtZW51IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tbmwtbWVudS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5tbmwtbWVudS1idXR0b24ubW5sLXJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubW5sLXN1Ym1lbnUubW5sLWV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5tbmwtbWVudSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnl-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], null, {
        menuData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menuSideNavClickEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../commons/src/lib/components/profile/profile.component.ts":
  /*!******************************************************************!*\
    !*** ../commons/src/lib/components/profile/profile.component.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function commonsSrcLibComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/first-letter-pipe */
    "../commons/src/lib/pipes/first-letter-pipe.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.profileClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProfileComponent, [{
        key: "onProfileClick",
        value: function onProfileClick(event) {
          this.profileClick.emit(event);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["mnl-user-profile"]],
      inputs: {
        firstName: "firstName",
        lastName: "lastName"
      },
      outputs: {
        profileClick: "profileClick"
      },
      decls: 7,
      vars: 8,
      consts: [["id", "mnl-profile-container", "fxLayoutGap", "15px"], ["id", "mnl-userinfo-name", "fxHide.xs", ""], ["id", "mnl-initials-button", "mat-raised-button", "", "mat-icon-button", "", 3, "click"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_3_listener($event) {
            return ctx.onProfileClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "mnlFirstLetter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "mnlFirstLetter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.firstName, " ", ctx.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.firstName), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.lastName), "");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      pipes: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_4__["FirstLetterPipe"]],
      styles: ["#mnl-initials-button[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InByb2plY3RzL2NvbW1vbnMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21ubC1pbml0aWFscy1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnl-user-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], null, {
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        profileClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../commons/src/lib/material.module.ts":
  /*!*********************************************!*\
    !*** ../commons/src/lib/material.module.ts ***!
    \*********************************************/

  /*! exports provided: modules, MaterialModule */

  /***/
  function commonsSrcLibMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "modules", function () {
      return modules;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    function modules() {
      return [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]];
    }

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [modules(), _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: modules(),
          exports: modules()
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/model/log-levels.model.ts":
  /*!****************************************************!*\
    !*** ../commons/src/lib/model/log-levels.model.ts ***!
    \****************************************************/

  /*! exports provided: LogLevelsEnum, logLevels */

  /***/
  function commonsSrcLibModelLogLevelsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogLevelsEnum", function () {
      return LogLevelsEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logLevels", function () {
      return logLevels;
    });

    var LogLevelsEnum = /*#__PURE__*/function (_Number) {
      _inherits(LogLevelsEnum, _Number);

      var _super = _createSuper(LogLevelsEnum);

      function LogLevelsEnum() {
        _classCallCheck(this, LogLevelsEnum);

        return _super.apply(this, arguments);
      }

      return LogLevelsEnum;
    }( /*#__PURE__*/_wrapNativeSuper(Number));

    LogLevelsEnum.TRACE = 5;
    LogLevelsEnum.DEBUG = 1;
    LogLevelsEnum.INFO = 2;
    LogLevelsEnum.WARN = 3;
    LogLevelsEnum.ERROR = 4;
    LogLevelsEnum.SILENT = 0;
    var logLevels = [{
      level: LogLevelsEnum.TRACE,
      name: 'TRACE'
    }, {
      level: LogLevelsEnum.DEBUG,
      name: 'DEBUG'
    }, {
      level: LogLevelsEnum.INFO,
      name: 'INFO'
    }, {
      level: LogLevelsEnum.WARN,
      name: 'WARN'
    }, {
      level: LogLevelsEnum.ERROR,
      name: 'ERROR'
    }, {
      level: LogLevelsEnum.SILENT,
      name: 'SILENT'
    }];
    /***/
  },

  /***/
  "../commons/src/lib/pipes/app-config-pipe.ts":
  /*!***************************************************!*\
    !*** ../commons/src/lib/pipes/app-config-pipe.ts ***!
    \***************************************************/

  /*! exports provided: AppConfigPipe */

  /***/
  function commonsSrcLibPipesAppConfigPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigPipe", function () {
      return AppConfigPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/app.config.service */
    "../commons/src/lib/services/app.config.service.ts");

    var AppConfigPipe = /*#__PURE__*/function () {
      function AppConfigPipe(config) {
        _classCallCheck(this, AppConfigPipe);

        this.config = config;
      }

      _createClass(AppConfigPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.config.get(value);
        }
      }]);

      return AppConfigPipe;
    }();

    AppConfigPipe.ɵfac = function AppConfigPipe_Factory(t) {
      return new (t || AppConfigPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]));
    };

    AppConfigPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "mnlAppConfig",
      type: AppConfigPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'mnlAppConfig'
        }]
      }], function () {
        return [{
          type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/pipes/first-letter-pipe.ts":
  /*!*****************************************************!*\
    !*** ../commons/src/lib/pipes/first-letter-pipe.ts ***!
    \*****************************************************/

  /*! exports provided: FirstLetterPipe */

  /***/
  function commonsSrcLibPipesFirstLetterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstLetterPipe", function () {
      return FirstLetterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FirstLetterPipe = /*#__PURE__*/function () {
      function FirstLetterPipe() {
        _classCallCheck(this, FirstLetterPipe);
      }

      _createClass(FirstLetterPipe, [{
        key: "transform",
        value: function transform(value) {
          return value ? value.substring(0, 1).toUpperCase() : null;
        }
      }]);

      return FirstLetterPipe;
    }();

    FirstLetterPipe.ɵfac = function FirstLetterPipe_Factory(t) {
      return new (t || FirstLetterPipe)();
    };

    FirstLetterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "mnlFirstLetter",
      type: FirstLetterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstLetterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'mnlFirstLetter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/services/app.config.service.ts":
  /*!*********************************************************!*\
    !*** ../commons/src/lib/services/app.config.service.ts ***!
    \*********************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function commonsSrcLibServicesAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "../../node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "../../node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppConfigService = /*#__PURE__*/function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
        this.config = null;
      }
      /**
       * Use to get the data found in the file (config file)
       */


      _createClass(AppConfigService, [{
        key: "get",
        value: function get(key) {
          return this.config[key];
        }
        /**
         * This method:
         *   Loads "config.json" to get all variables (e.g.: 'app.config.json')
         */

      }, {
        key: "load",
        value: function load() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this.http.get('assets/app.config.json').map(function (res) {
              return res;
            })["catch"](function (error) {
              resolve(error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json().error || 'Server error');
            }).subscribe(function (responseData) {
              _this.config = responseData;
              resolve(true);
            });
          });
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ɵfac = function AppConfigService_Factory(t) {
      return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfigService,
      factory: AppConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/services/local-storage.service.ts":
  /*!************************************************************!*\
    !*** ../commons/src/lib/services/local-storage.service.ts ***!
    \************************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function commonsSrcLibServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "set",
        value: function set(key, value) {
          localStorage.setItem(key, value);
        }
      }, {
        key: "get",
        value: function get(key) {
          return localStorage.getItem(key);
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)();
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/services/locale.service.ts":
  /*!*****************************************************!*\
    !*** ../commons/src/lib/services/locale.service.ts ***!
    \*****************************************************/

  /*! exports provided: LocaleService */

  /***/
  function commonsSrcLibServicesLocaleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return LocaleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.config.service */
    "../commons/src/lib/services/app.config.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-profile.service */
    "../commons/src/lib/services/user-profile.service.ts");
    /** @dynamic */


    var LocaleService = /*#__PURE__*/function () {
      function LocaleService(config, translate, userProfileService, document) {
        _classCallCheck(this, LocaleService);

        this.config = config;
        this.translate = translate;
        this.userProfileService = userProfileService;
        this.document = document;
        this.languages = [];
      }

      _createClass(LocaleService, [{
        key: "setTextOrientation",
        value: function setTextOrientation(direction) {
          document.body.setAttribute('dir', direction);
        }
      }, {
        key: "getTextOrientation",
        value: function getTextOrientation() {
          return document.body.getAttribute('dir');
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          this.languages = this.config.get('languages');

          if (!this.languages) {
            this.languages = [{
              key: 'fr',
              label: 'French',
              direction: 'ltr'
            }, {
              key: 'de',
              label: 'German',
              direction: 'ltr'
            }, {
              key: 'en',
              label: 'English',
              direction: 'ltr'
            }, {
              key: 'ar',
              label: 'Arabic',
              direction: 'rtl'
            }];
          }

          return this.languages;
        }
      }, {
        key: "getDefaultLocale",
        value: function getDefaultLocale() {
          var _this2 = this;

          this.locale = this.userProfileService.getLocale();

          if (!this.locale) {
            // tslint:disable-next-line: max-line-length
            this.locale = this.config.get('locale') ? this.config.get('locale') : this.translate.getBrowserLang() ? this.translate.getBrowserLang() : 'en';
          }

          return this.languages.find(function (e) {
            return e.key === _this2.locale;
          });
        }
      }, {
        key: "getActiveLocale",
        value: function getActiveLocale() {
          var _this3 = this;

          if (this.userProfileService.getLocale()) {
            return this.languages.find(function (e) {
              return e.key === _this3.userProfileService.getLocale();
            });
          }
        }
      }, {
        key: "setActiveLocale",
        value: function setActiveLocale(locale) {
          if (locale) {
            this.translate.use(locale.key);
            this.setTextOrientation(locale.direction);
            this.userProfileService.setLocale(locale.key);
          }
        }
      }]);

      return LocaleService;
    }();

    LocaleService.ɵfac = function LocaleService_Factory(t) {
      return new (t || LocaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    LocaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocaleService,
      factory: LocaleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/services/log.service.ts":
  /*!**************************************************!*\
    !*** ../commons/src/lib/services/log.service.ts ***!
    \**************************************************/

  /*! exports provided: LogService */

  /***/
  function commonsSrcLibServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/log-levels.model */
    "../commons/src/lib/model/log-levels.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.config.service */
    "../commons/src/lib/services/app.config.service.ts"); // tslint:disable: no-console


    var LogService = /*#__PURE__*/function () {
      function LogService(appConfigService) {
        _classCallCheck(this, LogService);

        this.appConfigService = appConfigService;
        this.onMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LogService, [{
        key: "error",
        value: function error(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].ERROR) {
            var _console;

            this.messageBus(message, 'ERROR');

            for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              optionalParams[_key - 1] = arguments[_key];
            }

            (_console = console).error.apply(_console, [message].concat(optionalParams));
          }
        }
      }, {
        key: "debug",
        value: function debug(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].DEBUG) {
            var _console2;

            this.messageBus(message, 'DEBUG');

            for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              optionalParams[_key2 - 1] = arguments[_key2];
            }

            (_console2 = console).debug.apply(_console2, [message].concat(optionalParams));
          }
        }
      }, {
        key: "info",
        value: function info(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].INFO) {
            var _console3;

            this.messageBus(message, 'INFO');

            for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              optionalParams[_key3 - 1] = arguments[_key3];
            }

            (_console3 = console).info.apply(_console3, [message].concat(optionalParams));
          }
        }
      }, {
        key: "log",
        value: function log(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].TRACE) {
            var _console4;

            this.messageBus(message, 'LOG');

            for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              optionalParams[_key4 - 1] = arguments[_key4];
            }

            (_console4 = console).log.apply(_console4, [message].concat(optionalParams));
          }
        }
      }, {
        key: "trace",
        value: function trace(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].TRACE) {
            var _console5;

            this.messageBus(message, 'TRACE');

            for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              optionalParams[_key5 - 1] = arguments[_key5];
            }

            (_console5 = console).trace.apply(_console5, [message].concat(optionalParams));
          }
        }
      }, {
        key: "warn",
        value: function warn(message) {
          if (this.currentLogLevel >= _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].WARN) {
            var _console6;

            this.messageBus(message, 'WARN');

            for (var _len6 = arguments.length, optionalParams = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
              optionalParams[_key6 - 1] = arguments[_key6];
            }

            (_console6 = console).warn.apply(_console6, [message].concat(optionalParams));
          }
        }
      }, {
        key: "assert",
        value: function assert(test, message) {
          if (this.currentLogLevel !== _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].SILENT) {
            var _console7;

            this.messageBus(message, 'ASSERT');

            for (var _len7 = arguments.length, optionalParams = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
              optionalParams[_key7 - 2] = arguments[_key7];
            }

            (_console7 = console).assert.apply(_console7, [test, message].concat(optionalParams));
          }
        }
      }, {
        key: "group",
        value: function group(groupTitle) {
          if (this.currentLogLevel !== _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].SILENT) {
            var _console8;

            for (var _len8 = arguments.length, optionalParams = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
              optionalParams[_key8 - 1] = arguments[_key8];
            }

            (_console8 = console).group.apply(_console8, [groupTitle].concat(optionalParams));
          }
        }
      }, {
        key: "groupEnd",
        value: function groupEnd() {
          if (this.currentLogLevel !== _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].SILENT) {
            console.groupEnd();
          }
        }
      }, {
        key: "getLogLevel",
        value: function getLogLevel(level) {
          var referencedLevel = _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["logLevels"].find(function (currentLevel) {
            return currentLevel.name.toLocaleLowerCase() === level.toLocaleLowerCase();
          });

          return referencedLevel ? referencedLevel.level : 4;
        }
      }, {
        key: "messageBus",
        value: function messageBus(message, logLevel) {
          this.onMessage.next({
            text: message,
            type: logLevel
          });
        }
      }, {
        key: "currentLogLevel",
        get: function get() {
          var configLevel = this.appConfigService.get('logLevel');

          if (configLevel) {
            return this.getLogLevel(configLevel);
          }

          return _model_log_levels_model__WEBPACK_IMPORTED_MODULE_1__["LogLevelsEnum"].ERROR;
        }
      }]);

      return LogService;
    }();

    LogService.ɵfac = function LogService_Factory(t) {
      return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]));
    };

    LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogService,
      factory: LogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/lib/services/user-profile.service.ts":
  /*!***********************************************************!*\
    !*** ../commons/src/lib/services/user-profile.service.ts ***!
    \***********************************************************/

  /*! exports provided: UserProfileService */

  /***/
  function commonsSrcLibServicesUserProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileService", function () {
      return UserProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.config.service */
    "../commons/src/lib/services/app.config.service.ts");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./local-storage.service */
    "../commons/src/lib/services/local-storage.service.ts");

    var UserProfileService = /*#__PURE__*/function () {
      function UserProfileService(appConfigService, localStorageService) {
        _classCallCheck(this, UserProfileService);

        this.appConfigService = appConfigService;
        this.localStorageService = localStorageService;
        this.userPrefix = '';
      }

      _createClass(UserProfileService, [{
        key: "getApplicationId",
        value: function getApplicationId() {
          return this.appConfigService.get('applicationId') ? this.appConfigService.get('applicationId') : '';
        }
      }, {
        key: "setUserPrefix",
        value: function setUserPrefix(userPrefix) {
          this.userPrefix = userPrefix;
        }
      }, {
        key: "getUserPrefix",
        value: function getUserPrefix() {
          return this.userPrefix ? this.userPrefix : '';
        }
      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.localStorageService.set(this.getApplicationId() + this.userPrefix + UserProfileService.LOCALE_PREFIX, locale);
        }
      }, {
        key: "getLocale",
        value: function getLocale() {
          return this.localStorageService.get(this.getApplicationId() + this.userPrefix + UserProfileService.LOCALE_PREFIX);
        }
      }]);

      return UserProfileService;
    }();

    UserProfileService.LOCALE_PREFIX = '____locale';

    UserProfileService.ɵfac = function UserProfileService_Factory(t) {
      return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]));
    };

    UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserProfileService,
      factory: UserProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]
        }, {
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../commons/src/public-api.ts":
  /*!************************************!*\
    !*** ../commons/src/public-api.ts ***!
    \************************************/

  /*! exports provided: modules, MaterialModule, CommonsModule, loadConfig, MenuComponent, HeaderComponent, AppConfigService, AppConfigPipe, LogService, LogLevelsEnum, logLevels, UserProfileService, LocalStorageService, LanguageMenuComponent, LocaleService, LoginComponent, FirstLetterPipe */

  /***/
  function commonsSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/material.module */
    "../commons/src/lib/material.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "modules", function () {
      return _lib_material_module__WEBPACK_IMPORTED_MODULE_0__["modules"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return _lib_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"];
    });
    /* harmony import */


    var _lib_commons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/commons.module */
    "../commons/src/lib/commons.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
      return _lib_commons_module__WEBPACK_IMPORTED_MODULE_1__["CommonsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loadConfig", function () {
      return _lib_commons_module__WEBPACK_IMPORTED_MODULE_1__["loadConfig"];
    });
    /* harmony import */


    var _lib_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/components/menu/menu.component */
    "../commons/src/lib/components/menu/menu.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return _lib_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"];
    });
    /* harmony import */


    var _lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components/header/header.component */
    "../commons/src/lib/components/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"];
    });
    /* harmony import */


    var _lib_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/services/app.config.service */
    "../commons/src/lib/services/app.config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return _lib_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"];
    });
    /* harmony import */


    var _lib_pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/pipes/app-config-pipe */
    "../commons/src/lib/pipes/app-config-pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppConfigPipe", function () {
      return _lib_pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_5__["AppConfigPipe"];
    });
    /* harmony import */


    var _lib_services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/services/log.service */
    "../commons/src/lib/services/log.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return _lib_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"];
    });
    /* harmony import */


    var _lib_model_log_levels_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/model/log-levels.model */
    "../commons/src/lib/model/log-levels.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogLevelsEnum", function () {
      return _lib_model_log_levels_model__WEBPACK_IMPORTED_MODULE_7__["LogLevelsEnum"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "logLevels", function () {
      return _lib_model_log_levels_model__WEBPACK_IMPORTED_MODULE_7__["logLevels"];
    });
    /* harmony import */


    var _lib_services_user_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lib/services/user-profile.service */
    "../commons/src/lib/services/user-profile.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserProfileService", function () {
      return _lib_services_user_profile_service__WEBPACK_IMPORTED_MODULE_8__["UserProfileService"];
    });
    /* harmony import */


    var _lib_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lib/services/local-storage.service */
    "../commons/src/lib/services/local-storage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return _lib_services_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"];
    });
    /* harmony import */


    var _lib_components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lib/components/language-menu/language-menu.component */
    "../commons/src/lib/components/language-menu/language-menu.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LanguageMenuComponent", function () {
      return _lib_components_language_menu_language_menu_component__WEBPACK_IMPORTED_MODULE_10__["LanguageMenuComponent"];
    });
    /* harmony import */


    var _lib_services_locale_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lib/services/locale.service */
    "../commons/src/lib/services/locale.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocaleService", function () {
      return _lib_services_locale_service__WEBPACK_IMPORTED_MODULE_11__["LocaleService"];
    });
    /* harmony import */


    var _lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./lib/components/login/login.component */
    "../commons/src/lib/components/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"];
    });
    /* harmony import */


    var _lib_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./lib/pipes/first-letter-pipe */
    "../commons/src/lib/pipes/first-letter-pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FirstLetterPipe", function () {
      return _lib_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_13__["FirstLetterPipe"];
    });
    /*
     * Public API Surface of mnl-commons
     */

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login/login-demo.component */
    "./src/app/components/login/login-demo.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var routes = [{
      path: 'login',
      component: _components_login_login_demo_component__WEBPACK_IMPORTED_MODULE_2__["LoginDemoComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @muraai/mnl-commons */
    "../commons/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _commons_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../commons/src/lib/components/header/header.component */
    "../commons/src/lib/components/header/header.component.ts");
    /* harmony import */


    var _commons_src_lib_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../commons/src/lib/components/profile/profile.component */
    "../commons/src/lib/components/profile/profile.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _commons_src_lib_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../commons/src/lib/components/menu/menu.component */
    "../commons/src/lib/components/menu/menu.component.ts");

    var _c0 = ["sidenav"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config, logService, userProfileService, translate, router) {
        _classCallCheck(this, AppComponent);

        this.config = config;
        this.logService = logService;
        this.userProfileService = userProfileService;
        this.translate = translate;
        this.router = router;
        this.title = 'demo-app';
        this.over = 'over';
        this.header = {
          name: 'Demo-App',
          showMenuIcon: true,
          toolbarColor: 'primary',
          logo: 'http://muraai.com/wp-content/uploads/2019/12/new.png'
        };
        this.menuData = [{
          name: 'home',
          icon: 'home',
          route: '/home'
        }, {
          name: 'Login',
          icon: 'login',
          route: '/login'
        }];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translate.setDefaultLang('en');
          this.userProfileService.setUserPrefix('demo');
          this.logService.info('this is info ');
          this.userFirstName = 'John';
          this.userLastName = 'Smith';
        }
      }, {
        key: "changeRouteLink",
        value: function changeRouteLink(event) {
          this.router.navigate([event.route]);
        } // to get the key value from app.config.json using AppConfig service

      }, {
        key: "getConfigValue",
        value: function getConfigValue() {
          this.host = this.config.get('host');
        }
      }, {
        key: "onProfileClick",
        value: function onProfileClick(event) {
          this.initials = event;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 9,
      vars: 5,
      consts: [[3, "header", "menuButonClickEvent"], ["mnl-header-user-profile", "", 3, "firstName", "lastName", "profileClick"], [3, "mode"], ["sidenav", ""], [3, "menuData", "menuSideNavClickEvent"], [2, "height", "88vh"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnl-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuButonClickEvent", function AppComponent_Template_mnl_header_menuButonClickEvent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mnl-user-profile", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("profileClick", function AppComponent_Template_mnl_user_profile_profileClick_1_listener($event) {
            return ctx.onProfileClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mnl-menu", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuSideNavClickEvent", function AppComponent_Template_mnl_menu_menuSideNavClickEvent_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            ctx.changeRouteLink($event);
            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("firstName", ctx.userFirstName)("lastName", ctx.userLastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.over);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuData", ctx.menuData);
        }
      },
      directives: [_commons_src_lib_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _commons_src_lib_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _commons_src_lib_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["AppConfigService"]
        }, {
          type: _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["LogService"]
        }, {
          type: _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["UserProfileService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sidenav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, TranslationLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslationLoaderFactory", function () {
      return TranslationLoaderFactory;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @muraai/mnl-commons */
    "../commons/index.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-translate-multi-http-loader */
    "../../node_modules/ngx-translate-multi-http-loader/__ivy_ngcc__/fesm2015/ngx-translate-multi-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_login_login_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login-demo.component */
    "./src/app/components/login/login-demo.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_5__["CommonsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: TranslationLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_login_login_demo_component__WEBPACK_IMPORTED_MODULE_11__["LoginDemoComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_5__["CommonsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_login_login_demo_component__WEBPACK_IMPORTED_MODULE_11__["LoginDemoComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_5__["CommonsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
              useFactory: TranslationLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
            }
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]]
        }]
      }], null, null);
    })();

    function TranslationLoaderFactory(http) {
      return new ngx_translate_multi_http_loader__WEBPACK_IMPORTED_MODULE_9__["MultiTranslateHttpLoader"](http, [{
        prefix: './assets/i18n/',
        suffix: '.json'
      }, {
        prefix: './assets/mnl-commons/i18n/',
        suffix: '.json'
      }]);
    }
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commons_src_lib_pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../commons/src/lib/pipes/app-config-pipe */
    "../commons/src/lib/pipes/app-config-pipe.ts");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 3,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "mnlAppConfig");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "application"));
        }
      },
      pipes: [_commons_src_lib_pipes_app_config_pipe__WEBPACK_IMPORTED_MODULE_1__["AppConfigPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login-demo.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/login/login-demo.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginDemoComponent */

  /***/
  function srcAppComponentsLoginLoginDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginDemoComponent", function () {
      return LoginDemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @muraai/mnl-commons */
    "../commons/index.ts");
    /* harmony import */


    var _commons_src_lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../commons/src/lib/components/login/login.component */
    "../commons/src/lib/components/login/login.component.ts");

    var LoginDemoComponent = /*#__PURE__*/function () {
      function LoginDemoComponent(logService) {
        _classCallCheck(this, LoginDemoComponent);

        this.logService = logService;
      }

      _createClass(LoginDemoComponent, [{
        key: "onLogin",
        value: function onLogin(event) {
          this.logService.info(event);
        }
      }]);

      return LoginDemoComponent;
    }();

    LoginDemoComponent.ɵfac = function LoginDemoComponent_Factory(t) {
      return new (t || LoginDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["LogService"]));
    };

    LoginDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginDemoComponent,
      selectors: [["app-login"]],
      decls: 1,
      vars: 0,
      consts: [[3, "login"]],
      template: function LoginDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mnl-login", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("login", function LoginDemoComponent_Template_mnl_login_login_0_listener($event) {
            return ctx.onLogin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_commons_src_lib_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4tZGVtby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login-demo.component.html',
          styleUrls: ['./login-demo.component.scss']
        }]
      }], function () {
        return [{
          type: _muraai_mnl_commons__WEBPACK_IMPORTED_MODULE_1__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Muraai-library\dharmraj-publish\projects\demo-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map