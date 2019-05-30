"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_api_1 = require("./web-api");
var AppComponent = /** @class */ (function () {
    function AppComponent(cyclecadeApi, trackApi) {
        this.cyclecadeApi = cyclecadeApi;
        this.trackApi = trackApi;
        this.eventsGet();
    }
    AppComponent.prototype.eventsGet = function () {
        var _this = this;
        this.cyclecadeApi.eventsGet({})
            .then(function (res) {
            console.log(res);
            _this.events = res.events;
            _this.events.forEach(function (value) {
                // this.startDate = new Date(value.startTicksAsDate);
                value.startTicksAsDate = new Date(value.startTicksAsDate);
                console.log(value.startTicksAsDate);
            });
            _this.startDate = new Date();
        });
        /*this.cyclecadeApi.futureEvents({})
            .then((res) => {
                console.log(res);
                this.futureEvents = res.futureEvents;
                this.futureEvents.forEach(function (value) {
                    // this.startDate = new Date(value.startTicksAsDate);
                    value.startTicksAsDate = new Date(value.startTicksAsDate);
                    console.log(value.startTicksAsDate);
                });
                this.startDate = new Date();
            });

        this.cyclecadeApi.CurrentEvents({})
            .then((res) => {
                console.log(res);
                this.currentEvents = res.currentEvents;
                this.currentEvents.forEach(function (value) {
                    // this.startDate = new Date(value.startTicksAsDate);
                    value.startTicksAsDate = new Date(value.startTicksAsDate);
                    console.log(value.startTicksAsDate);
                });
                this.startDate = new Date();
            });*/
    };
    AppComponent.prototype.openmodal = function (eventName, title, creator, ev, theme, lap, tracklength, mod, eq, rank, wet) {
        this.eventname = eventName;
        this.trackTitle = title;
        this.creatorName = creator;
        this.evtype = ev;
        this.cvrcadeTheme = theme;
        this.laps = lap;
        this.trackLength = tracklength;
        this.mods = mod;
        this.equalized = eq;
        this.ranked = rank;
        this.weather = wet;
        console.log(event);
        this.element = document.getElementById('openModalButton');
        this.element.click();
    };
    AppComponent.prototype.openFutureModal = function () {
        this.element2 = document.getElementById('openFutureModalButton');
        this.element2.click();
    };
    AppComponent.prototype.openCurrentModal = function () {
        this.element3 = document.getElementById('openCurrentModalButton');
        this.element3.click();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "appBase",
            // providers: [WebApi],
            templateUrl: "./app/app.component.html",
            styleUrls: ["./app/app.component.css"],
        }),
        __metadata("design:paramtypes", [web_api_1.WebApi,
            web_api_1.WebApi])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map