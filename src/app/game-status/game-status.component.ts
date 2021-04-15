import { Component, OnInit, OnDestroy } from '@angular/core';
import { gameStatus } from '../shared/models/gameStatus.model';
import { theGameService } from '../shared/services/theGame.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit , OnDestroy {

  public theGame: gameStatus[] ;
  private subscription: Subscription;

  constructor(private gameService: theGameService ) { }


  private DeleteStatus(id: string) {
   this.subscription =  this.gameService.deleteOneStatusGame(id).subscribe(()=>{
    this.gameService.getGameStatusAsync().subscribe(theGame => this.theGame = theGame)
   });
    
  }


  ngOnInit() {

    this.subscription = this.gameService.getGameStatusAsync().subscribe(theGame => this.theGame = theGame);

  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe(); 
  }

}
