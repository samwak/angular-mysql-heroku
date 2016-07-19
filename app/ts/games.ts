/**
 * Created by samuelwaknine on 16/07/2016.
 */
//Like Java, define attributes, constructor

export class Game {

    id:number;
    home:string;
    away:string;
    stadium:string;

    constructor(id:number,
                home:string,
                away:string,
                stadium:string){

        this.id = id;
        this.home = home;
        this.away = away;
        this.stadium = stadium;
    }
}