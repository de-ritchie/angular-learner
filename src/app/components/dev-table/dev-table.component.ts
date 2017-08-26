import {Component, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

import {Developer} from '../../interfaces/interfaces.developer';
import {developers} from '../../models/dev';

@Component({
    selector: 'dev-table',
    templateUrl: 'app/components/dev-table/devTable.html',
    styleUrls: ['app/components/dev-table/table.css'],    
    encapsulation: ViewEncapsulation.Native
})

export class DevTable{

    @Output() customevent: EventEmitter<any>;

    selectedDev: Developer;
    developers: Developer[] = developers;

    onSelect (dev: Developer){

        this.selectedDev = dev;
        this.customevent.emit({data: this.selectedDev});
    };

    constructor(){
        this.customevent = new EventEmitter();
    }
}