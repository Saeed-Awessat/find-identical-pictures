import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../shared/services/memory.service';
import { Subscription } from 'rxjs/Subscription';
import { theGameService } from '../shared/services/theGame.service';
import { gameStatus } from '../shared/models/gameStatus.model';

@Component({
    selector: 'app-matrix',
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

    private subscription: Subscription;
    private lockAddAsync: boolean;

    constructor(private memory: MemoryService,
        private gameService: theGameService) {
    }

    ngOnInit() {
        this.lockAddAsync = false;
    }

    get gameStatusMessage() {
        return this.memory.isOver ? `Congratulations, Your Score is  ${this.memory.moves} Moves` : `Moves: ${this.memory.moves} , ` + "  Time: " + `${this.memory.UPDATE_ELAPSED} s`;
    }

    addStatus() {
        if (this.memory.isOver) {

            let ElapsedSM: string = " s";
            let yetsog: string;

            if (this.memory.UPDATE_ELAPSED / 60 > 1) {
                yetsog = Math.floor(this.memory.UPDATE_ELAPSED / 60) + ":" + ((this.memory.UPDATE_ELAPSED % 60) >= 10 ? this.memory.UPDATE_ELAPSED % 60 : "0" + this.memory.UPDATE_ELAPSED % 60);
                ElapsedSM = " m";
            } else {
                yetsog = "0:" + (this.memory.UPDATE_ELAPSED >= 10 ? this.memory.UPDATE_ELAPSED : "0" + this.memory.UPDATE_ELAPSED);
            }

            let status = new gameStatus(this.memory.moves, yetsog + ElapsedSM);

            this.subscription = this.gameService.addStatusGame(status)
                .subscribe(() => { this.lockAddAsync = true; });

        }
    }


    ngOnDestroy(): void {
        if (this.lockAddAsync) {
            this.lockAddAsync = false;
            this.subscription.unsubscribe(); // בכדי שיפסיק להאזין Observable-שחרור ה
        }
    }


}
