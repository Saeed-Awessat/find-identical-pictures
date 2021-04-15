import {Injectable} from '@angular/core';
import {Card} from "../models/card.model";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CardsService {

    constructor(private http: Http) {
    }

    getCards(): Observable<any> {
        return this.getFontAwesomeCards();
    }

    getFontAwesomeCards(): Observable<any> {
        return this.http.get('../../assets/cards.json')
            .map((res) => {
                let imgs = res.json();
                return imgs.map(img => new Card(img.toString().substring(0,1), this.imgTemplate(img)));
            });
    }

    imgTemplate(img) {
        return '<i aria-hidden="true"><img src="./assets/api/game_pics/' + img + '" height="100" width="100"></i>';
    }

}
