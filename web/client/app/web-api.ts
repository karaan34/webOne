import {EventsArgsCom, EventTargetCom, TrackLoadArgCom, TrackLoadTargetCom} from "../../server/common-api";
/* tslint:disable */
let Injectable = require("@angular/core").Injectable;
/* tslint:enable */

/* tslint:disable:no-any */
/* tslint:disable:max-line-length */
/* tslint:disable:trailing-comma */
@Injectable()
export class WebApi {
    public eventsGet(comArgs: EventsArgsCom): Promise<EventTargetCom>;
    public eventsGet(): Promise<EventTargetCom>;
    public eventsGet(): Promise<EventTargetCom> {
        let comArgs: EventsArgsCom = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        } else {
            comArgs = {
            };
        }

        return new Promise<EventTargetCom>(
            (resolve: Function, reject: Function) => {
                cycligent.ajax.call<EventsArgsCom, EventTargetCom>(
                    "web.common-service.eventsGet", comArgs, (call, response) => {
                        if (response.status === "success") {
                            resolve(response);
                        } else {
                            // We downgrade status type here for console log.
                            response.status === "error" ? console.warn(response.error) : console.info(response.error);
                            reject(response);
                        }
                    });
            });
    };

    public futureEvents(comArgs: EventsArgsCom): Promise<EventTargetCom>;
    public futureEvents(): Promise<EventTargetCom>;
    public futureEvents(): Promise<EventTargetCom> {
        let comArgs: EventsArgsCom = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        } else {
            comArgs = {
            };
        }

        return new Promise<EventTargetCom>(
            (resolve: Function, reject: Function) => {
                cycligent.ajax.call<EventsArgsCom, EventTargetCom>(
                    "web.common-service.futureEvents", comArgs, (call, response) => {
                        if (response.status === "success") {
                            resolve(response);
                        } else {
                            // We downgrade status type here for console log.
                            response.status === "error" ? console.warn(response.error) : console.info(response.error);
                            reject(response);
                        }
                    });
            });
    };

    public CurrentEvents(comArgs: EventsArgsCom): Promise<EventTargetCom>;
    public CurrentEvents(): Promise<EventTargetCom>;
    public CurrentEvents(): Promise<EventTargetCom> {
        let comArgs: EventsArgsCom = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        } else {
            comArgs = {
            };
        }

        return new Promise<EventTargetCom>(
            (resolve: Function, reject: Function) => {
                cycligent.ajax.call<EventsArgsCom, EventTargetCom>(
                    "web.common-service.CurrentEvents", comArgs, (call, response) => {
                        if (response.status === "success") {
                            resolve(response);
                        } else {
                            // We downgrade status type here for console log.
                            response.status === "error" ? console.warn(response.error) : console.info(response.error);
                            reject(response);
                        }
                    });
            });
    };

    public trackLoad(comArgs: TrackLoadArgCom): Promise<TrackLoadTargetCom>;
    public trackLoad(trackId: string): Promise<TrackLoadTargetCom>;
    public trackLoad(): Promise<TrackLoadTargetCom> {
        let comArgs: TrackLoadArgCom = null;
        if (typeof arguments[0] === "object" && arguments.length === 1 && !Array.isArray(arguments[0])) {
            comArgs = arguments[0];
        } else {
            comArgs = {
                trackId: arguments[0],
            };
        }

        return new Promise<TrackLoadTargetCom>(
            (resolve: Function, reject: Function) => {
                cycligent.ajax.call<TrackLoadArgCom, TrackLoadTargetCom>(
                    "web.common-service.trackLoad", comArgs, (call, response) => {
                        if (response.status === "success") {
                            resolve(response);
                        } else {
                            // We downgrade status type here for console log.
                            response.status === "error" ? console.warn(response.error) : console.info(response.error);
                            reject(response);
                        }
                    });
            });
    };
}
/* tslint:enable:no-any */
/* tslint:enable:max-line-length */
/* tslint:enable:trailing-comma */
