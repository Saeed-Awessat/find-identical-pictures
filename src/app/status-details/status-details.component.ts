import { Component, OnInit } from '@angular/core';
import { gameStatus } from '../shared/models/gameStatus.model';
import { ActivatedRoute } from '@angular/router';
import { theGameService } from '../shared/services/theGame.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})
export class StatusDetailsComponent implements OnInit {

  public status: gameStatus;
  public candies: gameStatus[] ;
  private subscription: Subscription;


     // ActivatedRoute - הנוכחי Route-מידע לגבי ה
     constructor(
      private activatedRoute: ActivatedRoute,
      private gameService: theGameService) { }



  ngOnInit() {


    let id: string = this.activatedRoute.snapshot.params["id"];
 
    this.subscription = this.gameService.getOneStatusGame(id).subscribe(gameStatus => this.status = gameStatus);
    
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe(); 
  }

}





