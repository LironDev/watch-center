"use strict";
(self["webpackChunkwatch_center"] = self["webpackChunkwatch_center"] || []).push([["main"],{

/***/ 7065:
/*!******************************************************!*\
  !*** ./src/app/alerts-feed/alerts-feed.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertsFeedComponent: () => (/* binding */ AlertsFeedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4148);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);






function AlertsFeedComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83D\uDD34");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AlertsFeedComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](alert_r2.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", alert_r2.title, " || ", alert_r2.alertDate, "");
  }
}
class AlertsFeedComponent {
  constructor(http) {
    this.http = http;
    this.url = '';
    this.runEvery = 10 * 1000;
    this.alertsData = [];
    this.noResponse = false;
  }
  ngOnInit() {
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.fetchAlertsData();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(this.runEvery).subscribe(() => {
      this.fetchAlertsData();
    });
  }
  fetchAlertsData() {
    this.http.get(this.url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.timeout)(this.runEvery * 2.2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error fetching data:', error);
      this.noResponse = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)('Data not available');
    })).subscribe(data => {
      this.alertsData = data;
      this.noResponse = false;
    });
  }
  static #_ = this.ɵfac = function AlertsFeedComponent_Factory(t) {
    return new (t || AlertsFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AlertsFeedComponent,
    selectors: [["app-alerts-feed"]],
    decls: 6,
    vars: 2,
    consts: [["dir", "rtl", "lang", "he"], [2, "display", "inline"], ["style", "color: red; display: inline-block;", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "color", "red", "display", "inline-block"]],
    template: function AlertsFeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u05D4\u05EA\u05E8\u05E2\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AlertsFeedComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlertsFeedComponent_li_5_Template, 5, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.alertsData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: [".alert[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid #DDD;\n    margin-bottom: 10px;\n    border-radius: 5px;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWxlcnRzLWZlZWQvYWxlcnRzLWZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _rss_feed_rss_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rss-feed/rss-feed.component */ 1522);
/* harmony import */ var _alerts_feed_alerts_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts-feed/alerts-feed.component */ 7065);






function AppComponent_app_rss_feed_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-rss-feed", 13);
  }
}
function AppComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 14);
  }
}
class AppComponent {
  constructor() {
    this.title = 'watch-center';
    this.newsEnableCheck = false;
    this.darkMode = false; // Initialize dark mode as false
  }

  ngOnInit() {
    // Load newsEnableCheck and dark mode state from localStorage
    const storedNewsEnableCheck = localStorage.getItem('newsEnableCheck');
    if (storedNewsEnableCheck) {
      this.newsEnableCheck = JSON.parse(storedNewsEnableCheck);
    }
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      this.darkMode = JSON.parse(storedDarkMode);
    }
  }
  newsToggleChange(values) {
    console.log(values.currentTarget.checked);
    this.newsEnableCheck = values.currentTarget.checked;
    localStorage.setItem('newsEnableCheck', JSON.stringify(this.newsEnableCheck));
  }
  darkModeToggleChange(values) {
    this.darkMode = values.currentTarget.checked; // Toggle dark mode state
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 20,
    vars: 8,
    consts: [["role", "banner", "dir", "rtl", "lang", "he", 1, "toolbar"], ["width", "40", "alt", "Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "dark-mode-toggle"], ["type", "checkbox", "id", "darkModeToggle", 3, "ngModel", "ngModelChange", "change"], ["for", "darkModeToggle"], [1, "spacer"], ["type", "checkbox", 3, "checked", "change"], ["for", "news_enable"], ["role", "main", 1, "content"], [1, "grid-container"], ["class", "rss-feed", 4, "ngIf"], ["class", "separator", 4, "ngIf"], [1, "alerts-feed"], [1, "rss-feed"], [1, "separator"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u05EA\u05E6\u05D5\u05D2\u05EA \u05D4\u05EA\u05E8\u05E2\u05D5\u05EA \u05D5\u05D7\u05D3\u05E9\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.darkMode = $event;
        })("change", function AppComponent_Template_input_change_5_listener($event) {
          return ctx.darkModeToggleChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_input_change_10_listener($event) {
          return ctx.newsToggleChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u05D4\u05E6\u05D2 \u05D7\u05D3\u05E9\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_app_rss_feed_16_Template, 1, 0, "app-rss-feed", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_div_17_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-alerts-feed", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dark-mode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.newsEnableCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dark-mode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newsEnableCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newsEnableCheck);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _rss_feed_rss_feed_component__WEBPACK_IMPORTED_MODULE_0__.RssFeedComponent, _alerts_feed_alerts_feed_component__WEBPACK_IMPORTED_MODULE_1__.AlertsFeedComponent],
    styles: [".grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1px 1fr; \n\n    grid-gap: 0; \n\n    align-items: normal;\n    width: 100%;\n    height: 100vh; \n\n  }\n  \n  .separator[_ngcontent-%COMP%] {\n    background-color: #111; \n\n    height: 100%;\n    width: 100%;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n\n\n.dark-mode[_ngcontent-%COMP%] {\n    background-color: #111;\n    color: orange;\n  }\n  \n  \n\n  body.dark-mode[_ngcontent-%COMP%] {\n    background-color: #111;\n    color: orange;\n  }\n  \n  \n\n  .toolbar.dark-mode[_ngcontent-%COMP%] {\n    background-color: #333; \n\n    color: orange; \n\n    box-shadow: 0 1px 5px rgba(255, 255, 255, 0.2); \n\n  }\n  \n  .toolbar.dark-mode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    filter: brightness(0); \n\n  }\n  \n  \n\n  .content.dark-mode[_ngcontent-%COMP%] {\n    background-color: #111; \n\n    color: orange; \n\n    box-shadow: 0 1px 5px rgba(255, 255, 255, 0.2); \n\n    \n    display: flex; \n\n    flex-direction: column; \n\n  }\n\n  .content.dark-mode[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  \n  \n\n  .toolbar.dark-mode[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    \n\n  }\n\n.toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n}\n\n.content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n}\n\n[_nghost-%COMP%] {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n      margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n      margin: 0;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n      color: #1976d2;\n      text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n      color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n      position: relative;\n      width: 80%;\n      max-width: 600px;\n      border-radius: 6px;\n      padding-top: 45px;\n      margin-top: 8px;\n      overflow: hidden;\n      background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n      content: \"\\2022 \\2022 \\2022\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 4px;\n      background: rgb(58, 58, 58);\n      color: #c2c3c4;\n      width: 100%;\n      font-size: 2rem;\n      line-height: 0;\n      padding: 14px 0;\n      text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n      color: white;\n      padding: 0 1rem 1rem;\n      margin: 0;\n  }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDLEVBQUUsaUVBQWlFO0lBQ3JHLFdBQVcsRUFBRSxzQ0FBc0M7SUFDbkQsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhLEVBQUUsZ0NBQWdDO0VBQ2pEOztFQUVBO0lBQ0Usc0JBQXNCLEVBQUUsZ0RBQWdEO0lBQ3hFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxPQUFPO0FBQ1g7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7RUFFQSxvRUFBb0U7RUFDcEU7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBLHdDQUF3QztFQUN4QztJQUNFLHNCQUFzQixFQUFFLGtDQUFrQztJQUMxRCxhQUFhLEVBQUUsNEJBQTRCO0lBQzNDLDhDQUE4QyxFQUFFLHdCQUF3QjtFQUMxRTs7RUFFQTtJQUNFLHFCQUFxQixFQUFFLHVEQUF1RDtFQUNoRjs7RUFFQSx3Q0FBd0M7RUFDeEM7SUFDRSxzQkFBc0IsRUFBRSxrQ0FBa0M7SUFDMUQsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyw4Q0FBOEMsRUFBRSx3QkFBd0I7O0lBRXhFLGFBQWEsRUFBRSxxQkFBcUI7SUFDcEMsc0JBQXNCLEVBQUUsd0NBQXdDO0VBQ2xFOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBLHlEQUF5RDtFQUN6RDtJQUNFLGdEQUFnRDtFQUNsRDs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtNQUNNLDBKQUEwSjtNQUMxSixlQUFlO01BQ2YsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixtQ0FBbUM7TUFDbkMsa0NBQWtDO0VBQ3RDOztFQUVBOzs7Ozs7TUFNSSxhQUFhO0VBQ2pCOztFQUVBO01BQ0ksU0FBUztFQUNiOztFQUVBOzs7TUFHSSxjQUFjO01BQ2QscUJBQXFCO0VBQ3pCOztFQUVBO01BQ0ksY0FBYztFQUNsQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQ0FBaUM7RUFDckM7O0VBRUE7TUFDSSw0QkFBNEI7TUFDNUIsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixPQUFPO01BQ1AsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixjQUFjO01BQ2QsV0FBVztNQUNYLGVBQWU7TUFDZixjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjs7RUFFQTtNQUNJLHdFQUF3RTtNQUN4RSxZQUFZO01BQ1osb0JBQW9CO01BQ3BCLFNBQVM7RUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXB4IDFmcjsgLyogVGhpcyBjcmVhdGVzIHR3byBlcXVhbC13aWR0aCBjb2x1bW5zIHNlcGFyYXRlZCBieSBhIDFweCBsaW5lICovXHJcbiAgICBncmlkLWdhcDogMDsgLyogUmVtb3ZlIGFueSBnYXAgYmV0d2VlbiBncmlkIGl0ZW1zICovXHJcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBBZGp1c3QgdGhlIGNvbG9yIG9mIHRoZSBzZXBhcmF0b3IgYXMgbmVlZGVkICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLyogQXBwbHkgZGFyayBtb2RlIHRvIHRoZSBlbnRpcmUgc2NyZWVuICovXHJcbi5kYXJrLW1vZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhcmdldCBlbGVtZW50cyB0aGF0IHNob3VsZCBjaGFuZ2Ugb3V0c2lkZSBvZiBkYXJrLW1vZGUgY29udGV4dCAqL1xyXG4gIGJvZHkuZGFyay1tb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZXMgZm9yIHRoZSB0b29sYmFyIGluIGRhcmsgbW9kZSAqL1xyXG4gIC50b29sYmFyLmRhcmstbW9kZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBEYXJrZW4gdGhlIHRvb2xiYXIgYmFja2dyb3VuZCAqL1xyXG4gICAgY29sb3I6IG9yYW5nZTsgLyogVGV4dCBjb2xvciBpbiBkYXJrIG1vZGUgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IC8qIEFkZCBhIHN1YnRsZSBzaGFkb3cgKi9cclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIuZGFyay1tb2RlIGltZyB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7IC8qIE1ha2UgdGhlIGxvZ28gd2hpdGUgb3IgYWRqdXN0IGJyaWdodG5lc3MgYXMgbmVlZGVkICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlcyBmb3IgdGhlIGNvbnRlbnQgaW4gZGFyayBtb2RlICovXHJcbiAgLmNvbnRlbnQuZGFyay1tb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7IC8qIERhcmtlbiB0aGUgY29udGVudCBiYWNrZ3JvdW5kICovXHJcbiAgICBjb2xvcjogb3JhbmdlOyAvKiBUZXh0IGNvbG9yIGluIGRhcmsgbW9kZSAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgLyogQWRkIGEgc3VidGxlIHNoYWRvdyAqL1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleCBkaXNwbGF5ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBDb2x1bW4gbGF5b3V0IHRvIHN0cmV0Y2ggdmVydGljYWxseSAqL1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQuZGFyay1tb2RlIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZGl0aW9uYWwgc3R5bGVzIGZvciBzcGVjaWZpYyBlbGVtZW50cyBpbiBkYXJrIG1vZGUgKi9cclxuICAudG9vbGJhci5kYXJrLW1vZGUgc3BhbiB7XHJcbiAgICAvKiBNb2RpZnkgdGhlIHRvb2xiYXIgdGV4dCBzdHlsZXMgaW4gZGFyayBtb2RlICovXHJcbiAgfVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _rss_feed_rss_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rss-feed/rss-feed.component */ 1522);
/* harmony import */ var _alerts_feed_alerts_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts-feed/alerts-feed.component */ 7065);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe-html.pipe */ 787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _rss_feed_rss_feed_component__WEBPACK_IMPORTED_MODULE_2__.RssFeedComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _rss_feed_rss_feed_component__WEBPACK_IMPORTED_MODULE_2__.RssFeedComponent, _alerts_feed_alerts_feed_component__WEBPACK_IMPORTED_MODULE_3__.AlertsFeedComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

/***/ }),

/***/ 1522:
/*!************************************************!*\
  !*** ./src/app/rss-feed/rss-feed.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RssFeedComponent: () => (/* binding */ RssFeedComponent)
/* harmony export */ });
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xml-js */ 9005);
/* harmony import */ var xml_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xml_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function RssFeedComponent_div_0_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.date);
  }
}
function RssFeedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u05D7\u05D3\u05E9\u05D5\u05EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RssFeedComponent_div_0_li_4_Template, 5, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.rssData);
  }
}
class RssFeedComponent {
  constructor(http) {
    this.http = http;
    this.rssUrl = 'https://rss.walla.co.il/feed/22';
  }
  ngOnInit() {
    this.getRssData();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.updateRssData())).subscribe();
  }
  getRssData() {
    this.http.get(this.rssUrl, {
      responseType: 'text'
    }).subscribe(data => {
      this.rssData = this.convert(data);
    });
  }
  updateRssData() {
    return this.http.get(this.rssUrl, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(data => {
      this.rssData = this.convert(data);
      return data;
    }));
  }
  convert(data) {
    const result = JSON.parse((0,xml_js__WEBPACK_IMPORTED_MODULE_0__.xml2json)(data, {
      compact: true,
      spaces: 4
    }));
    const items = result['rss']['channel'].item;
    return items.map(item => ({
      title: item.title._cdata,
      date: item.pubDate._text
    }));
  }
  static #_ = this.ɵfac = function RssFeedComponent_Factory(t) {
    return new (t || RssFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RssFeedComponent,
    selectors: [["app-rss-feed"]],
    decls: 1,
    vars: 1,
    consts: [["dir", "rtl", "lang", "he", 4, "ngIf"], ["dir", "rtl", "lang", "he"], [4, "ngFor", "ngForOf"]],
    template: function RssFeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RssFeedComponent_div_0_Template, 5, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rssData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 787:
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static #_ = this.ɵfac = function SafeHtmlPipe_Factory(t) {
    return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safeHtml",
    type: SafeHtmlPipe,
    pure: true
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://176.231.79.195:3000/getData'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map