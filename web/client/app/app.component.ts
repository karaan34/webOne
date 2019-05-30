import {Component,ViewChild,ElementRef} from "@angular/core";
import {WebApi} from "./web-api";
import {EventCreationEvent} from "../data/common-int";

@Component({
    selector: "appBase",
   // providers: [WebApi],
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"],
})
export class AppComponent {
    title: string;
    startin: Date;
    events: EventCreationEvent[];
    futureEvents: EventCreationEvent[];
    currentEvents: EventCreationEvent[];
    SingleEvent: any[];

    element: HTMLElement;
    element2: HTMLElement;
    element3: HTMLElement;
    private startDate: Date;
    private cardImage: string;

    constructor(
        private cyclecadeApi: WebApi,
        private  trackApi: WebApi
    ) {
        this.eventsGet();

    }

    eventsGet() {

        this.cyclecadeApi.eventsGet({})
            .then((res) => {
                console.log(res);
                this.events = res.events;
                this.events.forEach(function (value) {
                    // this.startDate = new Date(value.startTicksAsDate);
                    value.startTicksAsDate = new Date(value.startTicksAsDate);
                    console.log(value.startTicksAsDate);
                });
                this.startDate = new Date();
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
    }

    eventname :string;
    trackTitle:string;
    creatorName:string;
    evtype:string;
    cvrcadeTheme:string;
    laps: number;
    trackLength:number;
    mods:number;
    equalized: boolean;
    ranked:boolean;
    weather:string;



    openmodal(eventName:string, title:string,creator:string,ev:string,theme:string,lap:number,tracklength:number,mod:number,eq:boolean,rank:boolean,wet:string) {
        this.eventname = eventName;
        this.trackTitle = title;
        this.creatorName = creator;
        this.evtype = ev;
        this.cvrcadeTheme = theme;
        this.laps= lap;
        this.trackLength = tracklength;
        this.mods= mod;
        this.equalized =eq;
        this.ranked =rank;
        this.weather =wet;


         console.log(event);
          this.element = document.getElementById('openModalButton') as HTMLElement;
         this.element.click();

 }
    openFutureModal() {
        this.element2 = document.getElementById('openFutureModalButton') as HTMLElement;
        this.element2.click();
    }

    openCurrentModal() {
        this.element3 = document.getElementById('openCurrentModalButton') as HTMLElement;
        this.element3.click();
    }

}