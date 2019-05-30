"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PipeSearch = /** @class */ (function () {
    function PipeSearch() {
    }
    PipeSearch.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(function (item) {
            return item.name.toString().toLowerCase().includes(searchText.toLowerCase());
        });
    };
    PipeSearch = __decorate([
        core_1.Pipe({
            name: 'pipeSearch'
        })
    ], PipeSearch);
    return PipeSearch;
}());
exports.PipeSearch = PipeSearch;
var PipeActive = /** @class */ (function () {
    function PipeActive() {
    }
    PipeActive.prototype.transform = function (items, active) {
        if (!items)
            return [];
        if (!active)
            return items;
        return items.filter(function (item) {
            return item.active;
        });
    };
    PipeActive = __decorate([
        core_1.Pipe({
            name: 'pipeActive'
        })
    ], PipeActive);
    return PipeActive;
}());
exports.PipeActive = PipeActive;
var PipeOrderBy = /** @class */ (function () {
    function PipeOrderBy() {
    }
    PipeOrderBy.prototype.transform = function (items, field) {
        if (!items)
            return [];
        items.sort(function (item1, item2) {
            if (!field) { //sort by specific Field of an array
                if (item1 < item2)
                    return -1;
                else if (items > item2)
                    return 1;
                else
                    0;
            }
            else {
                if (item1[field] < item2[field])
                    return -1;
                else if (items[field] > item2[field])
                    return 1;
                else
                    0;
            }
        });
        return items;
    };
    PipeOrderBy = __decorate([
        core_1.Pipe({
            name: 'pipeOrderBy'
        })
    ], PipeOrderBy);
    return PipeOrderBy;
}());
exports.PipeOrderBy = PipeOrderBy;
//# sourceMappingURL=app.pipe.js.map