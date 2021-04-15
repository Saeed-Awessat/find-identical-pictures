import { Component, Input } from '@angular/core';
import { Card } from '../shared/models/card.model';
import { MemoryService } from '../shared/services/memory.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() card: Card;

    constructor(private memory: MemoryService) { }

}
