import {Component, ViewEncapsulation} from '@angular/core';
import {Developer} from './interfaces/interfaces.developer';

@Component({
    selector: 'root-app',
    templateUrl: 'app/components/root/app.component.html'
})
export class RootComponent{

    binding: string = 'Test Value';
    
    selectedDev: Developer;
    title: string;
    
    onEventFunc(event: any){
        this.selectedDev = event.data;
    }

    constructor(){

    }
}