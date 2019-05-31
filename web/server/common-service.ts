/// <api-generator path="web/client/app/web-api.ts" className="WebApi"/>

import {EventsArgsCom, EventTargetCom, Track, TrackLoadArgCom, TrackLoadTargetCom} from "./common-api";
//import mongo from "./web-mongo";
import {Db} from "mongodb"
import {GlobalConstants} from "./global-constants";
export = {
    _cycligentCallExport: {



        eventsGet: function (state: StateCom<EventTargetCom>, data: EventsArgsCom, callback: Function) {


            let cvrDb: Db = state.dbs[GlobalConstants.dbName];

            let eventsCol = cvrDb.collection(GlobalConstants.eventsColName);
        console.log(cvrDb);
        console.log(eventsCol);

         //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
           // console.log (regEx);

            let query = {

            } ;
            let newDate = new Date();

            eventsCol.find({"versionType": "prod" }).sort({_id: -1}).limit(15)
                .toArray()
                .then((events: any[]) => {
                    state.target.status = "success";
                    state.target.events = events;
                    callback();
                })
                .catch((err) => {
                    state.target.status = "error";
                    state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                    callback();
                });




        },

        futureEvents: function (state: StateCom<EventTargetCom>, data: EventsArgsCom, callback: Function) {

            let cvrDb: Db = state.dbs[GlobalConstants.dbName];

            let eventsCol = cvrDb.collection(GlobalConstants.eventsColName);


            //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
            // console.log (regEx);

            let query = {} ;
            let newDate = new Date();
            eventsCol.find({"versionType": "canary" }).sort({_id: -1}).limit(20)
                .toArray()
                .then((futureEvents: any[]) => {
                    state.target.status = "success";
                    state.target.futureEvents = futureEvents;
                    callback();
                })
                .catch((err) => {
                    state.target.status = "error";
                    state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                    callback();
                });
        },

        CurrentEvents: function (state: StateCom<EventTargetCom>, data: EventsArgsCom, callback: Function) {

            let cvrDb: Db = state.dbs[GlobalConstants.dbName];

            let eventsCol = cvrDb.collection(GlobalConstants.eventsColName);


            //   let regEx = new RegExp(".*" + data.filter.searchText + ".*", "i");
            // console.log (regEx);

            let query = {} ;
            let newDate = new Date();
            eventsCol.find({"versionType": "prod" }).sort({_id: -1}).limit(20)
                .toArray()
                .then((currentEvents: any[]) => {
                    state.target.status = "success";
                    state.target.currentEvents = currentEvents;
                    callback();
                })
                .catch((err) => {
                    state.target.status = "error";
                    state.target.error = "eventsGet: Unable to fetch events: " + err.message;
                    callback();
                });
        },

        trackLoad: function (state: StateCom<TrackLoadTargetCom>, data: TrackLoadArgCom, callback: Function) {

            let cycleCadeDb: Db = (<any>state).dbs[GlobalConstants.dbName];
            let tracksCol = cycleCadeDb.collection(GlobalConstants.cycleCadeTracksColName);
            let track: Track;

            return tracksCol.findOne({_id: data.trackId})
                .then((trackData: Track) => {

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
                .catch((err) => {
                    state.target.status = "error";
                    state.target.error = "trackLoad: Unable to get track: " + err.message;
                  //  CvrLog.error("trackLoad: Unable to get track: ", err);
                    callback();

                });

        }
    }
}