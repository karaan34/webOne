import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {PipeActive, PipeOrderBy, PipeSearch} from "./app.pipe";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {WebApi} from "./web-api";


@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, PipeSearch, PipeActive, PipeOrderBy],
    imports: [BrowserModule, FormsModule ],
    providers: [{provide: APP_BASE_HREF, useValue: "/web/client"},WebApi]
})

export class AppModule{}