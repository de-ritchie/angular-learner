import {Component, Input} from '@angular/core';
import {Developer} from '../../interfaces/interfaces.developer';

@Component({
    selector: 'dev-details',
    templateUrl: 'app/components/dev-details/devDetails.html',
    inputs: ['developer']
})
export class DevDetails{
    
    @Input('developer') selecteddeveloper: Developer;
}