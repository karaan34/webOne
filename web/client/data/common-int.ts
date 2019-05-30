export interface EventCreationEvent {
    startTicksAsDate?: Date;
    _id?: string;
    mods?: number;
    title?: string;
    description?: string;

    startTicks?: number;
    expireTicks?: number;
    startDelay?: number;
    privateEvent?: boolean;
    eventType?: string;
    aiRiderCount?: number;
    aiRiderWatts?: number;
    recoverySpeedMaximum?: number;
    ridersMinimum?: number;
    ridersMaximum?: number;
    equalized?: boolean;
    ranked?: boolean;
    location?: string;
    // weather: string;
    cornering?: string;
    physical?: boolean;
    nonPhysical?: boolean;
    secondaryView?: boolean;
    favorite?: boolean;

    leaderAllowedGap?: number;
    sweeperAllowedGap?: number;


    tracks?: Track[];

    bikesAllowed?: Bike[];


    ridersCurrent?: number;
    joined?: boolean;
    ghosting?: boolean;

    // TODO: 1 change minimumRiderBasedEvent to recurringEvent must be done and deploy with game client/server
    minimumRiderBasedEvent?: boolean;

    invitees?: string[];

    powerUpsHoldingMax: number;
    powerUpsDealt: number;
    powerUpsChosen: number;

    lapsBeforeElimination: number;
    finishingRidersAtEnd: number;

    difficuly?: EventDiffculty;


    weather?: {
        windVelocity?: number;
        windHeading?: number;
        airPressure?: number;
        airDewPoint?: number;
        airTemperature?: number;
        weather?: string;
    }

    creator?: {
        _id?: string;
        name?: string;
    }

}

export interface Track {
    _id: string;
    title: string;
    trackLength?: number;
    laps?: number;
    displayOrder?: number;
    homeWorld?: boolean;

    cvrcadeTheme?: "mountain" | "road" | "fantasy";
    cardImage?: string;
}

export interface Bike {
    _id: number;
    title: string;
    cvrcadeTheme?: "mountain" | "road" | "fantasy";
}

export interface EventDiffculty {
    total: 12;
    climbing: 2;
    technical: 3;
    wind: 2;
    endurance: 3;
}
