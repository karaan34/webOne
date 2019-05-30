/*
    Copyright 2016 Improvement Interactive, LLC
    All Rights Reserved Worldwide

    IN NO EVENT SHALL IMPROVEMENT INTERACTIVE, LLC BE LIABLE TO ANY
    PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
    DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS
    SOFTWARE AND ITS DOCUMENTATION, EVEN IF IMPROVEMENT INTERACTIVE
    HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    IMPROVEMENT INTERACTIVE SPECIFICALLY DISCLAIMS ANY WARRANTIES,
    INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE
    AND ACCOMPANYING DOCUMENTATION, IF ANY, PROVIDED HEREUNDER IS
    PROVIDED "AS IS". IMPROVEMENT INTERACTIVE, LLC HAS NO OBLIGATION
    TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR
    MODIFICATIONS.
 */
cycligent.import("cycligent.ajax");
cycligent.import("cycligent.session");
/* tslint:enable:no-any */
/* tslint:disable:no-unused-variable */
function main() {
    /* tslint:enable:no-unused-variable */
    "use strict";
    var systemNormalize = System.normalize;
    System.normalize = function (name, parentName, parentAddress) {
        return systemNormalize.call(this, name, parentName, parentAddress).then(function (url) {
            // /-\d+\.\d+\..*js&/
            if (url.indexOf("/client/") !== -1 && url.indexOf("." + "min" + ".") == -1) {
                if (cycligent.config.production) {
                    url = url.replace(/.js$/, "-" + cycligent.config.appVersion + "." + "js");
                }
                if (cycligent.config.minimizeSource) {
                    url = url.replace(/.js$/, "." + "min" + "." + "js");
                }
            }
            else if (url.indexOf("/server/") !== -1) {
                throw new Error("Tried to load " + url + " which is a server file! The only server files " +
                    "which can be referenced from the client-side are TypeScript interfaces and type " +
                    "definitions that get compiled away to nothing.");
            }
            return url;
        });
    };
    // Get session before proceeding.
    var session = new cycligent.Session();
    session.registerFetchNotify(function () {
        cycligent.ajax.authorizer.authorize({ "functions": ["/"] }, function () {
            // Session ready
            console.info("Session ready");
            main2();
        });
    });
}
function versionTypeCheckSetAndReload() {
    // If we're logged in, user.role.versionType dictates our versionType, so this makes sure our role
    // gets updated to whatever cookie we have.
    if ((cycligent.Session.singleton.propertyGet("user") !== "anonymous@unknown.com")) {
        var userVersionType = cycligent.Session.singleton.propertyGet("role").versionType;
        var cookieMatch = /versionType=([^;]+)/.exec(document.cookie);
        if (cookieMatch) {
            var cookieVersionType = cookieMatch[1];
            if (userVersionType !== cookieVersionType) {
                cycligent.ajax.call("cvr.auth.auth-service.versionTypeUpdate", {
                    versionType: cookieVersionType
                }, function (call, callResponse) {
                    if (callResponse.status === "success") {
                        window.location.reload();
                    }
                    else {
                        console.error("Error with versionTypeUpdate:");
                        console.error(callResponse);
                    }
                });
            }
        }
    }
}
function main2() {
    versionTypeCheckSetAndReload();
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        packages: {
            "/web/client": {
                format: "cjs",
                defaultExtension: "js"
            },
            "rxjs": {
                format: "cjs",
                defaultExtension: "js"
            }
        },
        map: {
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npm:rxjs'
        }
    });
    // noinspection JSFileReferences
    System.import("/web/client/app/boot")
        .then(null, console.error.bind(console));
}
//# sourceMappingURL=main.js.map