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

// noinspection ReservedWordAsName
cycligent.config = {

    appName: "CVRCADE WEB",
    appDescription: "CVRCADE WEB",
    appVersion: "M.m.B",

    production: false,
    minimizeSource: false,

    startupScript: "@app.main",

    providerUrl: "/web/provider.aspx",

    providerTimeout: 34000,

    loader: {

        libs: [],

        waitFor: {
            dom: false,
            page: false
        },

        timeout: (
            location.hostname === "localhost" ? 2500 : 70000
        ),

        /* APPLICATION Roots
         * Should always associate with an application, especially for cycligent names.
         */
        roots: {
            jquery: {
                root: "/web-cycligent/client",
                isCycligentName: false
            },
            cycligent: {root: "/web-cycligent/client"},
            web: {root: "/web/client"}
        }

    },

    debug: {
        on: true,

        doNotCatchAllExceptionsOnLocalHost: true,

        startup: true,
        scripts: false,

        private: {
            check: true,
            exception: true
        },

        args: {
            check: true,
            exception: true,
            arrays: {
                check: true,
                allElements: false
            }
        },

        interfaces: {
            check: true,
            exception: true
        }
    },

    session: {
        on: true,

        server: {
            on: true,
            timeoutOn: false,
            signOn: true,
            userConfig: true,
            messages: true,
            roles: true,
            skins: true
        },

        cookie: {
            on: false
        }
    }
};

if (cycligent.config.production) {
    cycligent.config.loader.libs = [
        "/web-cycligent/client/jquery.js",
        "/web/client/lib/core-js-client-shim-2.4.1.min.js",
        "/web/client/lib/system-0.19.40.min.js",
        "/web/client/lib/zone-0.8.4.min.js",
        "/web/client/lib/reflect-metadata-0.1.3.js",
        "/web/client/lib/bootstrap-3.3.6.min.js",
        "/web/client/node_modules/moment/min/moment.min.js",
        "/web/client/lib/bootstrap-datepicker.min.js",
        "/web/client/lib/bootstrap-clockpicker.min.js",
        "/web/client/node_modules/chart.js/dist/Chart.min.js"

    ];
} else {
    cycligent.config.loader.libs = [
        "/web-cycligent/client/jquery.js",
        "/web/client/lib/core-js-client-shim-2.4.1.min.js",
        "/web/client/lib/system-0.19.40.min.js",
        "/web/client/lib/zone-0.8.4.min.js",
        "/web/client/lib/reflect-metadata-0.1.3.js",
        "/web/client/lib/bootstrap-3.3.6.min.js",
        "/web/client/node_modules/moment/min/moment.min.js",
        "/web/client/lib/bootstrap-datepicker.min.js",
        "/web/client/lib/bootstrap-clockpicker.min.js",
        "/web/client/node_modules/chart.js/dist/Chart.min.js"

    ];
}
