import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable"; // Observable-ספריה חיצונית המכילה את ה rxjs
import { gameStatus } from "../models/gameStatus.model";


// :עלינו להגדיר את הפקודה הבאה DI-שאנו בונים, צריך להשתמש ב Service אם
@Injectable()
export class theGameService {

    // לשרת מרוחק ולהביא מידע AJAX אובייקט המסוגל לבצע גלישת httpClient
    constructor(private httpClient: HttpClient) { }

    public getGameStatusAsync(): Observable<gameStatus[]> {
        return this.httpClient.get("http://localhost:3000/gameStatus")
            .map((memoryGame: Object) => <gameStatus[]>memoryGame); //.map((products: Product[]) => products)
    }


    public getOneStatusGame(id: string): Observable<gameStatus> {
        

        return this.httpClient.get("http://localhost:3000/gameStatus/"+id).map((response: gameStatus) => response);
           
    }

    public deleteOneStatusGame(id: string): Observable<gameStatus> {
        
         return this.httpClient.delete("http://localhost:3000/gameStatus/"+id).map((response: gameStatus) => response);
           
           
    }


    public addStatusGame(status): Observable<gameStatus[]>{

        return this.httpClient.post("http://localhost:3000/gameStatus/",status).map((theGame:gameStatus[])=>theGame);

    }


    
 


    }
