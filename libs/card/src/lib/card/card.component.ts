import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'demo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() comic?: any;
  @Input() title?: string;
  @Input() url?: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comic);
  }
}
