(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"center\">\n  <h1 class=\"title\">\n    {{ title }}\n  </h1>\n</div>\n\n<div class=\"code-container\">\n  <select [(ngModel)]=\"language\">\n    <option *ngFor=\"let lang of supportedLanguages\">{{ lang }}</option>\n  </select>\n  <button (click)=\"toggleMode()\">{{ editMode ? 'Preview' : 'Edit' }}</button>\n  <cp-code-preview [mode]=\"mode\" [language]=\"language\"></cp-code-preview>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.title {\n  font-family: 'Satisfy', cursive;\n  font-weight: 100;\n  font-size: 4rem; }\n\n.code-container {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  width: 100%; }\n\n.code-container * {\n    margin-bottom: 0.5rem; }\n\n.code-container cp-code-preview {\n    max-width: 968px;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_preview_code_preview_body_code_preview_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-preview/code-preview-body/code-preview-body.component */ "./src/app/code-preview/code-preview-body/code-preview-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SlideCode.it';
        this.language = 'typescript';
        this.supportedLanguages = _code_preview_code_preview_body_code_preview_body_component__WEBPACK_IMPORTED_MODULE_1__["SUPPORTED_LANGUAGES"];
        this.editMode = true;
    }
    Object.defineProperty(AppComponent.prototype, "mode", {
        get: function () {
            return this.editMode ? 'edit' : 'preview';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggleMode = function () {
        this.editMode = !this.editMode;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_bash_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-bash.min.js */ "./node_modules/prismjs/components/prism-bash.min.js");
/* harmony import */ var prismjs_components_prism_bash_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_clike_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-clike.min.js */ "./node_modules/prismjs/components/prism-clike.min.js");
/* harmony import */ var prismjs_components_prism_clike_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_c_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-c.min.js */ "./node_modules/prismjs/components/prism-c.min.js");
/* harmony import */ var prismjs_components_prism_c_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_cpp_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-cpp.min.js */ "./node_modules/prismjs/components/prism-cpp.min.js");
/* harmony import */ var prismjs_components_prism_cpp_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_cpp_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_java_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-java.min.js */ "./node_modules/prismjs/components/prism-java.min.js");
/* harmony import */ var prismjs_components_prism_java_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_scala_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-scala.min.js */ "./node_modules/prismjs/components/prism-scala.min.js");
/* harmony import */ var prismjs_components_prism_scala_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scala_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_dart_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-dart.min.js */ "./node_modules/prismjs/components/prism-dart.min.js");
/* harmony import */ var prismjs_components_prism_dart_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_dart_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_diff_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-diff.min.js */ "./node_modules/prismjs/components/prism-diff.min.js");
/* harmony import */ var prismjs_components_prism_diff_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_diff_min_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_go_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-go.min.js */ "./node_modules/prismjs/components/prism-go.min.js");
/* harmony import */ var prismjs_components_prism_go_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_go_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_swift_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-swift.min.js */ "./node_modules/prismjs/components/prism-swift.min.js");
/* harmony import */ var prismjs_components_prism_swift_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_swift_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_erlang_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-erlang.min.js */ "./node_modules/prismjs/components/prism-erlang.min.js");
/* harmony import */ var prismjs_components_prism_erlang_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_erlang_min_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_elixir_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-elixir.min.js */ "./node_modules/prismjs/components/prism-elixir.min.js");
/* harmony import */ var prismjs_components_prism_elixir_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_elixir_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_kotlin_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-kotlin.min.js */ "./node_modules/prismjs/components/prism-kotlin.min.js");
/* harmony import */ var prismjs_components_prism_kotlin_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_kotlin_min_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_haskell_min_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-haskell.min.js */ "./node_modules/prismjs/components/prism-haskell.min.js");
/* harmony import */ var prismjs_components_prism_haskell_min_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_haskell_min_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_objectivec_min_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-objectivec.min.js */ "./node_modules/prismjs/components/prism-objectivec.min.js");
/* harmony import */ var prismjs_components_prism_objectivec_min_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_objectivec_min_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prismjs/components/prism-typescript.min.js */ "./node_modules/prismjs/components/prism-typescript.min.js");
/* harmony import */ var prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript_min_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs_components_prism_sass_min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs/components/prism-sass.min.js */ "./node_modules/prismjs/components/prism-sass.min.js");
/* harmony import */ var prismjs_components_prism_sass_min_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass_min_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prismjs_components_prism_scss_min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prismjs/components/prism-scss.min.js */ "./node_modules/prismjs/components/prism-scss.min.js");
/* harmony import */ var prismjs_components_prism_scss_min_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss_min_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var prismjs_components_prism_ruby_min_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prismjs/components/prism-ruby.min.js */ "./node_modules/prismjs/components/prism-ruby.min.js");
/* harmony import */ var prismjs_components_prism_ruby_min_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_ruby_min_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prismjs_components_prism_rust_min_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prismjs/components/prism-rust.min.js */ "./node_modules/prismjs/components/prism-rust.min.js");
/* harmony import */ var prismjs_components_prism_rust_min_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_rust_min_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var prismjs_components_prism_python_min_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prismjs/components/prism-python.min.js */ "./node_modules/prismjs/components/prism-python.min.js");
/* harmony import */ var prismjs_components_prism_python_min_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python_min_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var prismjs_components_prism_scheme_min_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prismjs/components/prism-scheme.min.js */ "./node_modules/prismjs/components/prism-scheme.min.js");
/* harmony import */ var prismjs_components_prism_scheme_min_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scheme_min_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prismjs_components_prism_sql_min_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prismjs/components/prism-sql.min.js */ "./node_modules/prismjs/components/prism-sql.min.js");
/* harmony import */ var prismjs_components_prism_sql_min_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql_min_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var prismjs_components_prism_r_min_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prismjs/components/prism-r.min.js */ "./node_modules/prismjs/components/prism-r.min.js");
/* harmony import */ var prismjs_components_prism_r_min_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_r_min_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var prismjs_components_prism_nginx_min_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! prismjs/components/prism-nginx.min.js */ "./node_modules/prismjs/components/prism-nginx.min.js");
/* harmony import */ var prismjs_components_prism_nginx_min_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_nginx_min_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var prismjs_components_prism_docker_min_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! prismjs/components/prism-docker.min.js */ "./node_modules/prismjs/components/prism-docker.min.js");
/* harmony import */ var prismjs_components_prism_docker_min_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_docker_min_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var prismjs_components_prism_yaml_min_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! prismjs/components/prism-yaml.min.js */ "./node_modules/prismjs/components/prism-yaml.min.js");
/* harmony import */ var prismjs_components_prism_yaml_min_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_yaml_min_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./code-preview/code-preview.module */ "./src/app/code-preview/code-preview.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/// <reference path="./../typings/index.d.ts" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
                _code_preview_code_preview_module__WEBPACK_IMPORTED_MODULE_31__["CodePreviewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
            ],
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-preview/code-preview-body/code-preview-body.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/code-preview/code-preview-body/code-preview-body.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-prism [language]=\"language\" [code]=\"code\">\n</ngx-prism>\n"

/***/ }),

/***/ "./src/app/code-preview/code-preview-body/code-preview-body.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/code-preview/code-preview-body/code-preview-body.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  margin: 0; }\n  .body code {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.9rem;\n    color: #ff922b; }\n"

/***/ }),

/***/ "./src/app/code-preview/code-preview-body/code-preview-body.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/code-preview/code-preview-body/code-preview-body.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SUPPORTED_LANGUAGES, CodePreviewBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTED_LANGUAGES", function() { return SUPPORTED_LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePreviewBodyComponent", function() { return CodePreviewBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SUPPORTED_LANGUAGES = [
    'bash',
    'c',
    'clike',
    'cpp',
    'dart',
    'diff',
    'docker',
    'elixir',
    'erlang',
    'go',
    'haskell',
    'html',
    'java',
    'kotlin',
    'nginx',
    'objectivec',
    'python',
    'r',
    'ruby',
    'rust',
    'sass',
    'scala',
    'scheme',
    'scss',
    'sql',
    'swift',
    'typescript',
    'xml',
    'yaml',
];
var CodePreviewBodyComponent = /** @class */ (function () {
    function CodePreviewBodyComponent() {
        this.language = 'bash';
    }
    CodePreviewBodyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.codeText || changes.language) {
            console.log(changes.codeText);
            this.code = lodash_es__WEBPACK_IMPORTED_MODULE_1__["clone"](this.codeText);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodePreviewBodyComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodePreviewBodyComponent.prototype, "codeText", void 0);
    CodePreviewBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cp-code-preview-body',
            template: __webpack_require__(/*! ./code-preview-body.component.html */ "./src/app/code-preview/code-preview-body/code-preview-body.component.html"),
            styles: [__webpack_require__(/*! ./code-preview-body.component.scss */ "./src/app/code-preview/code-preview-body/code-preview-body.component.scss")]
        })
    ], CodePreviewBodyComponent);
    return CodePreviewBodyComponent;
}());



/***/ }),

/***/ "./src/app/code-preview/code-preview.component.html":
/*!**********************************************************!*\
  !*** ./src/app/code-preview/code-preview.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb6\">\n  <div class=\"code-editor relative bg-gray8 lh-copy br3 pv3 ph3\">\n    <h3 class=\"header mt0 mb2 relative normal f3\">\n      <span aria-hidden=\"true\" class=\"absolute top--025 left-050\">\n        <span class=\"bg-red3 w075 h075 br-100 dib v-mid mr1\"></span>\n        <span class=\"bg-yellow3 w075 h075 br-100 dib v-mid mr1\"></span>\n        <span class=\"bg-green3 w075 h075 br-100 dib v-mid mr1\"></span>\n      </span>\n      <div class=\"flex flex-row flex-nowrap items-center justify-center flex-grow-1 gray5 fw6\">\n        <span class=\"ph3\"><i class=\"far fa-file-code\"></i></span>\n        <span class=\"ml2\" *ngIf=\"mode === 'preview'\">{{ filename }}</span>\n        <span class=\"ml2\" *ngIf=\"mode === 'edit'\"><input type=\"text\" [(ngModel)]=\"filename\" /></span>\n      </div>\n    </h3>\n    <div *ngIf=\"mode === 'preview'\" class=\"code gray5 pa2\">\n      <cp-code-preview-body [codeText]=\"code\" [language]=\"language\"></cp-code-preview-body>\n    </div>\n    <div *ngIf=\"mode === 'edit'\" class=\"code gray5\">\n      <textarea type=\"text\" [(ngModel)]=\"code\" rows=\"20\"></textarea>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/code-preview/code-preview.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/code-preview/code-preview.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-editor {\n  background-color: #343a40;\n  font-family: 'Montserrat', sans-serif; }\n  .code-editor textarea {\n    background-color: #343a40;\n    font-family: 'Montserrat', sans-serif;\n    color: #adb5bd;\n    font-size: 1rem;\n    border: none;\n    width: calc(100% - 2rem);\n    padding: 1rem; }\n  .code-editor textarea:focus {\n    border: none;\n    outline: none; }\n  .mt0 {\n  margin-top: 0; }\n  .mb2 {\n  margin-bottom: .5rem; }\n  .f3 {\n  font-size: 1rem; }\n  .absolute {\n  position: absolute; }\n  .left-050 {\n  left: .5rem; }\n  .top--025 {\n  top: -0.25rem; }\n  .normal {\n  font-weight: normal; }\n  .v-mid {\n  vertical-align: middle; }\n  .mr1 {\n  margin-right: .25rem; }\n  .w075 {\n  width: 0.75rem; }\n  .bg-red3 {\n  background-color: #ffa8a8; }\n  .h075 {\n  height: .75rem; }\n  .dib {\n  display: inline-block; }\n  .br-100 {\n  border-radius: 100%; }\n  .bg-yellow3 {\n  background-color: #ffe066; }\n  .bg-green3 {\n  background-color: #8ce99a; }\n  .gray5 {\n  color: #adb5bd; }\n  .fw6 {\n  font-weight: 600; }\n  .flex-grow-1 {\n  flex-grow: 1; }\n  .justify-center {\n  justify-content: center; }\n  .items-center {\n  align-items: center; }\n  .flex-nowrap {\n  flex-wrap: nowrap; }\n  .flex-row {\n  flex-direction: row; }\n  .flex {\n  display: flex; }\n  .lh-copy {\n  line-height: 1.5; }\n  .br3 {\n  border-radius: .5rem; }\n  .relative {\n  position: relative; }\n  .ma0 {\n  margin: 0; }\n  .ph3 {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n  .pv3 {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/code-preview/code-preview.component.ts":
/*!********************************************************!*\
  !*** ./src/app/code-preview/code-preview.component.ts ***!
  \********************************************************/
/*! exports provided: CodePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePreviewComponent", function() { return CodePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodePreviewComponent = /** @class */ (function () {
    function CodePreviewComponent() {
        this.mode = 'edit';
        this.language = 'typescript'; // SUPPORTED_LANGUAGES[0];
        this.filename = '.bash_rc';
        this.code = "";
    }
    CodePreviewComponent.prototype.ngOnInit = function () { };
    CodePreviewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.mode) {
            console.log("Code", this.code);
        }
    };
    CodePreviewComponent.prototype.log = function () {
        console.log(this.code);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CodePreviewComponent.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodePreviewComponent.prototype, "language", void 0);
    CodePreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cp-code-preview',
            template: __webpack_require__(/*! ./code-preview.component.html */ "./src/app/code-preview/code-preview.component.html"),
            styles: [__webpack_require__(/*! ./code-preview.component.scss */ "./src/app/code-preview/code-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CodePreviewComponent);
    return CodePreviewComponent;
}());



/***/ }),

/***/ "./src/app/code-preview/code-preview.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/code-preview/code-preview.module.ts ***!
  \*****************************************************/
/*! exports provided: CodePreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePreviewModule", function() { return CodePreviewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _code_preview_body_code_preview_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-preview-body/code-preview-body.component */ "./src/app/code-preview/code-preview-body/code-preview-body.component.ts");
/* harmony import */ var _code_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-preview.component */ "./src/app/code-preview/code-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CodePreviewModule = /** @class */ (function () {
    function CodePreviewModule() {
    }
    CodePreviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__["PrismModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            declarations: [
                _code_preview_component__WEBPACK_IMPORTED_MODULE_5__["CodePreviewComponent"],
                _code_preview_body_code_preview_body_component__WEBPACK_IMPORTED_MODULE_4__["CodePreviewBodyComponent"],
            ],
            entryComponents: [],
            exports: [
                _code_preview_component__WEBPACK_IMPORTED_MODULE_5__["CodePreviewComponent"],
                _code_preview_body_code_preview_body_component__WEBPACK_IMPORTED_MODULE_4__["CodePreviewBodyComponent"],
            ],
        })
    ], CodePreviewModule);
    return CodePreviewModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/will/Development/slidecode.it/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map