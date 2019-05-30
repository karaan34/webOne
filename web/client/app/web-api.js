"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var Injectable = require("@angular/core").Injectable;
/* tslint:enable */
/* tslint:disable:no-any */
/* tslint:disable:max-line-length */
/* tslint:disable:trailing-comma */
var WebApi = /** @class */ (function () {
    function WebApi() {
    }
    WebApi.prototype.eventsGet = function () {
        var comArgs = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        }
        else {
            comArgs = {};
        }
        return new Promise(function (resolve, reject) {
            cycligent.ajax.call("web.common-service.eventsGet", comArgs, function (call, response) {
                if (response.status === "success") {
                    resolve(response);
                }
                else {
                    // We downgrade status type here for console log.
                    response.status === "error" ? console.warn(response.error) : console.info(response.error);
                    reject(response);
                }
            });
        });
    };
    ;
    WebApi.prototype.futureEvents = function () {
        var comArgs = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        }
        else {
            comArgs = {};
        }
        return new Promise(function (resolve, reject) {
            cycligent.ajax.call("web.common-service.futureEvents", comArgs, function (call, response) {
                if (response.status === "success") {
                    resolve(response);
                }
                else {
                    // We downgrade status type here for console log.
                    response.status === "error" ? console.warn(response.error) : console.info(response.error);
                    reject(response);
                }
            });
        });
    };
    ;
    WebApi.prototype.CurrentEvents = function () {
        var comArgs = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        }
        else {
            comArgs = {};
        }
        return new Promise(function (resolve, reject) {
            cycligent.ajax.call("web.common-service.CurrentEvents", comArgs, function (call, response) {
                if (response.status === "success") {
                    resolve(response);
                }
                else {
                    // We downgrade status type here for console log.
                    response.status === "error" ? console.warn(response.error) : console.info(response.error);
                    reject(response);
                }
            });
        });
    };
    ;
    WebApi.prototype.trackLoad = function () {
        var comArgs = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        }
        else {
            comArgs = {
                trackId: arguments[0],
            };
        }
        return new Promise(function (resolve, reject) {
            cycligent.ajax.call("web.common-service.trackLoad", comArgs, function (call, response) {
                if (response.status === "success") {
                    resolve(response);
                }
                else {
                    // We downgrade status type here for console log.
                    response.status === "error" ? console.warn(response.error) : console.info(response.error);
                    reject(response);
                }
            });
        });
    };
    ;
    WebApi = __decorate([
        Injectable()
    ], WebApi);
    return WebApi;
}());
exports.WebApi = WebApi;
/* tslint:enable:no-any */
/* tslint:enable:max-line-length */
/* tslint:enable:trailing-comma */
//# sourceMappingURL=web-api.js.map