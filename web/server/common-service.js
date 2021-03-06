"use strict";
/// <api-generator path="web/client/app/web-api.ts" className="WebApi"/>
var global_constants_1 = require("./global-constants");
module.exports = {
    _cycligentCallExport: {
        eventsGet: function (state, data, callback) {
            var cvrDb = state.dbs[global_constants_1.GlobalConstants.dbName];
            var eventsCol = cvrDb.collection(global_constants_1.GlobalConstants.eventsColName);
            console.log(cvrDb);
            console.log(eventsCol);
            //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
            // console.log (regEx);
            var query = {};
            var newDate = new Date();
            eventsCol.find({ "versionType": "prod" }).sort({ _id: -1 }).limit(15)
                .toArray()
                .then(function (events) {
                state.target.status = "success";
                state.target.events = events;
                callback();
            })
                .catch(function (err) {
                state.target.status = "error";
                state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                callback();
            });
        },
        futureEvents: function (state, data, callback) {
            var cvrDb = state.dbs[global_constants_1.GlobalConstants.dbName];
            var eventsCol = cvrDb.collection(global_constants_1.GlobalConstants.eventsColName);
            //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
            // console.log (regEx);
            var query = {};
            var newDate = new Date();
            eventsCol.find({ "versionType": "canary" }).sort({ _id: -1 }).limit(20)
                .toArray()
                .then(function (futureEvents) {
                state.target.status = "success";
                state.target.futureEvents = futureEvents;
                callback();
            })
                .catch(function (err) {
                state.target.status = "error";
                state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                callback();
            });
        },
        CurrentEvents: function (state, data, callback) {
            var cvrDb = state.dbs[global_constants_1.GlobalConstants.dbName];
            var eventsCol = cvrDb.collection(global_constants_1.GlobalConstants.eventsColName);
            //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
            // console.log (regEx);
            var query = {};
            var newDate = new Date();
            eventsCol.find({ "versionType": "prod" }).sort({ _id: -1 }).limit(20)
                .toArray()
                .then(function (currentEvents) {
                state.target.status = "success";
                state.target.currentEvents = currentEvents;
                callback();
            })
                .catch(function (err) {
                state.target.status = "error";
                state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                callback();
            });
        },
        trackLoad: function (state, data, callback) {
            var cycleCadeDb = state.dbs[global_constants_1.GlobalConstants.dbName];
            var tracksCol = cycleCadeDb.collection(global_constants_1.GlobalConstants.cycleCadeTracksColName);
            var track;
            return tracksCol.findOne({ _id: data.trackId })
                .then(function (trackData) {
                track = {
                    _id: trackData._id,
                    title: trackData.title,
                    segments: trackData.segments,
                    definitionType: trackData.definitionType,
                    cardImage: trackData.cardImage
                };
                state.target.track = track;
                state.target.status = "success";
                callback();
            })
                .catch(function (err) {
                state.target.status = "error";
                state.target.error = "trackLoad: Unable to get track: " + err.message;
                //  CvrLog.error("trackLoad: Unable to get track: ", err);
                callback();
            });
        }
    }
};
//# sourceMappingURL=common-service.js.map