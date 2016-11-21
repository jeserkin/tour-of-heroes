import {Pipe, PipeTransform} from "@angular/core";
import {HeroWithSmile} from "./hero-with-smile";

@Pipe({name: 'smile'})
export class SmilePipe implements PipeTransform {
    transform(hero:HeroWithSmile):String {
        return hero.randomSmile;
    }
}