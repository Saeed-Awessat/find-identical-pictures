import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../shared/services/memory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
