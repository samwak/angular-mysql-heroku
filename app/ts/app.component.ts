import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Game} from './games';
import {GamelistComponent} from './gamelist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    //Prepare to work with <gamelist> custom html tag
    directives: [GamelistComponent]
})

export class AppComponent {

    title = Config.GLOBAL_TITLE;
    games:Array<Game> = [];

    constructor(){

        this.games = [
            new Game(1444, 'Paris', 'Marseille', 'Parc des princes'),
            new Game(2442, 'Lyon', 'Bordeaux', 'Stade de France')
        ]
    }


}
