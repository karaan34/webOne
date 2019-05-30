
export interface CommonDataFilter {
    search?: string;
}

export interface CommonTargetCom extends TargetCom{
    search?: string;
}

export interface CommonCriteria {
    search?: string;
}


export interface EventTargetCom extends TargetCom {
    futureEvents: any[];
    currentEvents:any[];
    events: any[];
}

export interface TrackLoadTargetCom extends TargetCom {
    track: Track;
}
export interface Track {
    _id: string;
    title: string;
    trackLength?: number;
    laps?: number;
    weather?: Weather;
    segments?: any[];
    displayOrder?: number;
    definitionType: string;
    homeWorld?: boolean;

    cvrcadeTheme?: "mountain" | "road" | "fantasy";
    cardImage?: string;
}

export interface Weather {
    _id?: string;
    windVelocity?: number;
    windHeading?: number;
    airPressure?: number;
    airDewPoint?: number;
    airTemperature?: number;
    weather?: string;
}

export interface EventsArgsCom {
   /* filter : {
        _id?: string;
        title?:string;
        eventsDate?: Date;
        equalized?: number;
        ranked?: number;
        searchText?: string;
        profile_id?: string;
    }*/
}

export interface LogItemFromDb {
    error?: string;
}

export interface TrackLoadArgCom {
    trackId: string;
}

export type LogItemType = "log" | "info" | "warn" | "error";

export class LogItem {
    type: string;
    ticks: number;
    time: Date;
    serverName: string;
    versionType: string;
    message: string;
}

export class LogItemFromDb extends LogItem {
    _id: string;
}
