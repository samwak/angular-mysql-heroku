/**
 * Created by samuelwaknine on 16/07/2016.
 */
import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'gamelist',
    //Redirect the template location to that path
    templateUrl: 'app/ts/gamelist.component.html',
    //Prepare to receive date from another component
    inputs: ['games']
})

export class GamelistComponent {

    h1 = 'List of the day';

    onSelect(){
        console.log('click')
    }

}
