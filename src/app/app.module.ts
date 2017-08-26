import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RootComponent} from './app.component';
import {DevDetails} from './components/dev-details/dev-details.components';
import {DevTable} from './components/dev-table/dev-table.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    exports: [],
    declarations: [RootComponent, DevDetails, DevTable],
    providers: [],
    bootstrap: [RootComponent]
})
export class RootModule{

}