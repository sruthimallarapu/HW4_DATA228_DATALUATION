webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/views.module": [
		"../../../../../src/app/views/views.module.ts",
		"views.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var mainRoutes = [
    {
        path: '',
        loadChildren: './views/views.module#ViewsModule',
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__["a" /* LoginComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(mainRoutes, { useHash: true }
                // ,{enableTracing: true}
                )
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_aws_service__ = __webpack_require__("../../../../../src/app/services/aws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, toastr, vcr, awsService, cognitoService) {
        this.router = router;
        this.toastr = toastr;
        this.awsService = awsService;
        this.cognitoService = cognitoService;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var errorMessages = [];
        console.log('AppComponent: Checking configuration values.');
        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].cognitoIdentityPoolId) {
            errorMessages.push("Cognito Identity Pool not configured!\n\t The id is available in cloud formation output section.\n");
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].facebookAppId) {
            errorMessages.push("Facebook App Id not configured! \n\t This is the ID from your facebook developer portal.\n");
        }
        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ticketAPI) {
            errorMessages.push("Ticket API not configured!");
        }
        if (errorMessages.length > 0) {
            this.router.navigate(['/troubleshooting']);
        }
    };
    AppComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        console.log('AppComponent: the user is authenticated: ' + isLoggedIn);
    };
    var _a, _b, _c, _d, _e;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_aws_service__["a" /* AWSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_aws_service__["a" /* AWSService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["b" /* CognitoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["b" /* CognitoService */]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_aws_service__ = __webpack_require__("../../../../../src/app/services/aws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ticket_service__ = __webpack_require__("../../../../../src/app/services/ticket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_login_login_component__ = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_guard_config_guard__ = __webpack_require__("../../../../../src/app/shared/guard/config.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_aws_service__["a" /* AWSService */],
                __WEBPACK_IMPORTED_MODULE_4__services_cognito_service__["b" /* CognitoService */],
                __WEBPACK_IMPORTED_MODULE_4__services_cognito_service__["a" /* CognitoLoginService */],
                __WEBPACK_IMPORTED_MODULE_5__services_ticket_service__["a" /* TicketService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__shared_guard_config_guard__["a" /* ConfigGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/aws.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AWSService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare const AMA: any;
var AWSService = /** @class */ (function () {
    function AWSService() {
        AWS.config.update({ region: __WEBPACK_IMPORTED_MODULE_1__cognito_service__["b" /* CognitoService */]._REGION });
    }
    AWSService_1 = AWSService;
    /**
     * This is the method that needs to be called in order to init the aws global creds
     */
    AWSService.prototype.initAWSService = function (callback, isLoggedIn, idToken) {
        if (AWSService_1.runningInit) {
            // Need to make sure I don't get into an infinite loop here, so need to exit if this method is running already
            console.log('AWSService: Aborting running initAWSService()...it\'s running already.');
            // instead of aborting here, it's best to put a timer
            if (callback != null) {
                callback.callback();
                callback.callbackWithParam(null);
            }
            return;
        }
        console.log('AWSService: Running initAWSService()');
        AWSService_1.runningInit = true;
        var myThis = this;
        // First check if the user is authenticated already
        if (isLoggedIn) {
            myThis.setupAWS(isLoggedIn, callback, idToken);
        }
    };
    /**
     * Sets up the AWS global params
     *
     * @param isLoggedIn
     * @param callback
     * @param idToken
     */
    AWSService.prototype.setupAWS = function (isLoggedIn, callback, idToken) {
        console.log('AWSService: in setupAWS()');
        if (isLoggedIn) {
            console.log('AWSService: User is logged in');
            // Setup mobile analytics
            var options = {
                appId: '32673c035a0b40e99d6e1f327be0cb60',
                appTitle: 'aws-cognito-angular2-quickstart'
            };
            console.log('AWSService: Retrieving the id token');
        }
        else {
            console.log('AWSService: User is not logged in');
        }
        if (callback != null) {
            callback.callback();
            callback.callbackWithParam(null);
        }
        AWSService_1.runningInit = false;
    };
    var AWSService_1;
    AWSService.firstLogin = false;
    AWSService.runningInit = false;
    AWSService = AWSService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AWSService);
    return AWSService;
}());

//# sourceMappingURL=aws.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cognito.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CognitoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CognitoService = /** @class */ (function () {
    function CognitoService() {
        /**
         * When authenticating w/ user pool or face book we set currentEmailID
         * This ID is used in API requests.
         * @type {string}
         */
        this.currentEmailID = '';
    }
    CognitoService.getAwsCognito = function () {
        return AWSCognito;
    };
    CognitoService.prototype.getCognitoIdentity = function () {
        return AWS.config.credentials.identityId;
    };
    CognitoService.isLoggedin = function () {
        return AWS.config.credentials;
    };
    CognitoService._REGION = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].region;
    CognitoService._IDENTITY_POOL_ID = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cognitoIdentityPoolId;
    CognitoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CognitoService);
    return CognitoService;
}());

var CognitoLoginService = /** @class */ (function () {
    function CognitoLoginService(router, cognitoService, fb) {
        this.router = router;
        this.cognitoService = cognitoService;
        this.fb = fb;
        var initParams = {
            appId: CognitoLoginService_1._FACEBOOK_APP_ID,
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    CognitoLoginService_1 = CognitoLoginService;
    /**
     * http://docs.aws.amazon.com/cognito/latest/developerguide/facebook.html
     * @param {FacebookCallback} callback
     */
    CognitoLoginService.prototype.authenticateWithFacebook = function (callback) {
        var _this = this;
        // login with options
        var options = {
            scope: 'email',
            return_scopes: true,
            enable_profile_selector: true
        };
        var that = this;
        this.fb.login(options)
            .then(function (response) {
            // Add the Facebook access token to the Cognito credentials login map.
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: CognitoService._IDENTITY_POOL_ID,
                Logins: {
                    'graph.facebook.com': response.authResponse.accessToken
                }
            });
            _this.fb.api('/me', 'get', { fields: 'name, email' })
                .then(function (res) {
                console.log(res);
                that.cognitoService.currentEmailID = res.email;
            })
                .catch(function (e) {
                console.log(e);
            });
            AWS.config.credentials.get(function (err) {
                if (!err) {
                    callback.fbCallback(null, response);
                    localStorage.setItem('isLoggedin', 'true');
                }
                else {
                    //If cognito id pool incorrect we get error here
                    callback.fbCallback(err.message, null);
                }
            });
        })
            .catch(function (error) {
            console.error(error);
            callback.fbCallback(error, null);
        });
    };
    CognitoLoginService.prototype.logout = function () {
        console.log('CognitoLoginService: Logging out');
        this.cognitoService.currentEmailID = '';
        // AWS.config.credentials.clearCachedId();
        AWS.config.credentials = null;
    };
    var CognitoLoginService_1, _a, _b;
    CognitoLoginService._FACEBOOK_APP_ID = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].facebookAppId;
    CognitoLoginService = CognitoLoginService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, CognitoService, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
    ], CognitoLoginService);
    return CognitoLoginService;
}());

//# sourceMappingURL=cognito.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ticket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
        this._API_ROOT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ticketAPI;
    }
    /**
     *
     * @returns {Observable<any>}
     */
    TicketService.prototype.getTickets = function () {
        return this.http.get(this._API_ROOT + 'ticket')
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.getHealth = function () {
        return this.http.get(this._API_ROOT + 'health')
            .map(function (res) { return res.json(); });
    };
    TicketService.prototype.addTicket = function (ticket) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this._API_ROOT + 'ticket', ticket, options)
            .map(this.extractData);
        // .catch(this.handleErrorObservable);
    };
    TicketService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TicketService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    TicketService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    var _a;
    TicketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TicketService);
    return TicketService;
}());

//# sourceMappingURL=ticket.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__services_cognito_service__["b" /* CognitoService */].isLoggedin()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    var _a;
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard/config.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigGuard = /** @class */ (function () {
    function ConfigGuard(router) {
        this.router = router;
    }
    ConfigGuard.prototype.canActivate = function () {
        var errorMessages = [];
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cognitoIdentityPoolId) {
            errorMessages.push("Cognito Identity Pool not configured!\n\t The id is available in cloud formation output section.\n");
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].facebookAppId) {
            errorMessages.push("Facebook App Id not configured! \n\t This is the ID from your facebook developer portal.\n");
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ticketAPI) {
            errorMessages.push("Ticket API not configured!");
        }
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ticketAPI && !(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ticketAPI.slice(-1) === "/")) {
            errorMessages.push("Ticket API URL needs a trailing slash!");
        }
        if (errorMessages.length > 0) {
            this.router.navigate(['/troubleshooting']);
            return false;
        }
        return true;
    };
    var _a;
    ConfigGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], ConfigGuard);
    return ConfigGuard;
}());

//# sourceMappingURL=config.guard.js.map

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border-color: rgba(0,0,0,0.2);\n  color: white !important;\n}\n\n.btn-social {\n  position: relative;\n  padding-left: 44px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.btn-social:hover {\n  color: #eee;\n}\n\n.btn-social :first-child {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 40px;\n  padding: 7px;\n  font-size: 1.6em;\n  text-align: center;\n  border-right: 1px solid rgba(0,0,0,0.2);\n}\n\n.Absolute-Center {\n  margin: auto;\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n}\n\n.Absolute-Center.is-Responsive {\n  width: 50%;\n  height: 50%;\n  min-width: 200px;\n  max-width: 400px;\n  padding: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 50px\">\n  </div>\n  <div class=\"row\"><!-- login user -->\n    <div class=\"Absolute-Center is-Responsive\">\n    <div class=\"card\">\n\n      <div class=\"card-header\">\n        Login\n      </div>\n      <div class=\"card-block\">\n        <a class=\"btn btn-small btn-social btn-facebook\" (click)=\"loginWithFacebook()\">\n          <i class=\"fa fa-facebook fa-fw\"></i> Sign in with Facebook\n        </a>\n      </div>\n    </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, vRef, router, cognitoLoginService) {
        this.toastr = toastr;
        this.router = router;
        this.cognitoLoginService = cognitoLoginService;
        this.toastr.setRootViewContainerRef(vRef);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.cognitoLoginService.authenticateWithFacebook(this);
    };
    LoginComponent.prototype.fbCallback = function (message, result) {
        console.log('LoginComponent: fbCallback --> result ' + JSON.stringify(result));
        if (message === null) {
            this.router.navigate(['/ticket']);
        }
        else {
            this.toastr.error(message, 'Error!');
        }
    };
    var _a, _b, _c, _d;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["a" /* CognitoLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["a" /* CognitoLoginService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    // TODO: make sure you have the correct region
    region: 'eu-west-1',
    // TODO: This id can be retrieved in output section of the cognito ui
    // cloud formation stack.
    cognitoIdentityPoolId: 'eu-west-1:c5bd44b2-6168-4bc7-99da-6311302db79d',
    // TODO: Facebook app id can be retrieved from the application in your
    // facebook developer account.
    facebookAppId: '312947186914224',
    // TODO: The API URL is available in the API Gateway console under Stage
    // NOTE: don't forget trailing "/"  For example:
    // https://api.example.com/prod/
    ticketAPI: 'https://api.gopay.click/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map