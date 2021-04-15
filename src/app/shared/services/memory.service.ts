import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";
import { CardsService } from "./cards.service";
import { MatrixComponent } from "../../matrix/matrix.component";

@Injectable()
export class MemoryService {

    defaultTemplate = '<i class="fa fa-info" aria-hidden="true"></i>';

    cards: Card[] = [];
    memoryCards: Card[];
    flippedCards: number;
    disappearCard: boolean;

    moves: number;
    isOver: boolean = false;

    UPDATE_ELAPSED: number;
    timerId: any;
    timer:boolean;

    constructor(private cardsService: CardsService) {
        this.newGame();
    }

    newGame() {
        clearInterval(this.timerId);
        this.timer = false;
        this.UPDATE_ELAPSED = 0;

        this.disappearCard = false;

        this.isOver = false;
        this.memoryCards = [];
        this.flippedCards = 0;
        this.moves = 0;


        if (this.cards.length) {
            this.cards.map((card) => {
                card.flipped = false;
            });
            setTimeout(() => {
                this.cards = shuffle(this.cards);
            }, 300);
            return;
        }

        this.cards = [];
        this.cardsService.getCards()
            .subscribe(cards => {
                cards.map(card => {
                    /** push the card twice with different ref */
                    this.cards.push(card);
                    this.cards.push(Object.assign({}, card));
                });
                this.cards = shuffle(this.cards);
            });

    }


    flipCard(card: Card) {
        this.disappearCard = false;
        if (!this.timer) {
            this.timer = true;
            this.timerId = setInterval(() => {
                this.UPDATE_ELAPSED++;
            }, 1000);
        }

        if (!card.flipped && this.memoryCards.length < 2) {

            if (this.memoryCards.length === 0) {
                this.memoryCards.push(card);
                this.memoryCards[0].flipped = true;
            }
            else if (this.memoryCards.length === 1) {

                this.moves++;

                card.flipped = true;
                this.memoryCards.push(card);
                this.memoryCards[1].flipped = true;

                if (this.memoryCards[0].id === this.memoryCards[1].id) {
                    this.disappearCard = true;
                    this.flippedCards += 2;
                    this.memoryCards = [];

                    if (this.flippedCards === this.cards.length) {
                        clearInterval(this.timerId);
                        this.isOver = true;
                    }
                }
                else {
                    setTimeout(() => {
                        this.disappearCard = false;
                        this.memoryCards[0].flipped = false;
                        this.memoryCards[1].flipped = false;
                        this.memoryCards = [];
                    }, 700);
                }
            }
        }

    }


}


var shuffle = (array) => {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
